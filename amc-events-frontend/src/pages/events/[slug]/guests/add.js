import {React, useState} from 'react'
import { useRouter } from 'next/router'
import Layout from '@layout/Layout'
import PageHeader from '@components/common/PageHeader'
import { toast } from 'react-toastify'
import { API_URL } from '@config/index';
import { parseCookies } from '@helpers/index';
import Link from 'next/link'

export default function AddPage({token, query, id, addGuest, addFriend, userId}) {
    console.log(query)
    const [values, setValues] = useState({
        Firstname: '',
        Lastname: '',
        Option: 'GuestList',
        event: id,
        addedBy: userId
    });

    const [userData, setUserData] = useState({
        addGuest: addGuest,
        addFriend: addFriend
    });

    const router = useRouter();

    const handleSubmit = async (e) => {
        console.log(values)
        e.preventDefault();

        // Validation
        let valid = true;
        // validation
        for (const [key, value] of Object.entries(values)) {
            if (value === '') {
                valid = false;
                toast.error(`${key} can not be left empty`);
            }
        }

        if (values.Option === 'GuestList' && userData.addGuest <= 0) {
            valid = false;
            toast.error(`you can not add another guest`);
        }

        if (values.Option === 'FriendsList' && userData.addFriend <= 0) {
            valid = false;
            toast.error(`you can not add another friend`);
        }

        if (valid) {
            const res = await fetch(`${API_URL}/api/guest-lists`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ data: values }),
            });

            

            if (!res.ok) {
                if (res.status === 401 || res.status === 403) {
                    toast.error('No Token included');
                    return;
                }
                toast.error(
                    'Something went wrong with posting to strapi. detail in console'
                );

                console.log(
                    res.statusText,
                    'maybe use a unique name for your event'
                );
                var guest = userData.addGuest;
                var friend = userData.addFriend;
            } else {
                console.log(values.Option)
                if (values.Option === 'GuestList') {
                    console.log('gl', userData.addGuest-1)
                    // setuserData(addGuest => addGuest - 1);
                    setUserData(userData => ({...userData, addGuest: addGuest-1}));
                    guest = userData.addGuest-1;
                    // setuserData(userData => ({...userData, addGuest: addGuest-1}));
                } else {
                    setUserData(userData => ({...userData, addFriend: addFriend-1}));
                    friend = userData.addFriend-1;
                }

                console.log(guest)
                const res2 = await fetch(`${API_URL}/api/users/${userId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        addGuest: guest,
                        addFriend: friend
                    })
                });

                console.log(res2)

                if (!res2.ok) {
                    if (res2.status === 401 || res2.status === 403) {
                        toast.error('No Token included');
                        return;
                    }
                    toast.error(
                        'Something went wrong with posting to strapi. detail in console'
                    );

                    console.log(
                        res2.statusText,
                        'maybe use a unique name for your event'
                    );
                    return;
                }

                // clear forms
                setValues({
                    Firstname: '',
                    Lastname: '',
                    Option: 'GuestList',
                    event: id,
                    addedBy: userId
                })
            }            
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

  return (
    <Layout>        
        <PageHeader title="Add Guest"/>
        <div className="container">
            <div className="row justify-content-lg-between align-items-center">
                <div className="col-lg-6 col-md-8">
                    <div>
                    <Link href={`/events/${query}/guests/`}>Go Back</Link>
                    <h1>Add Guest to {query}</h1>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="row">
                                <label htmlFor="Firstname" className="mb-1">
                                First name <span className="text-danger">*</span>
                                </label>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Firstname"
                                        name='Firstname'
                                        required
                                        placeholder="First name"
                                        aria-label="First name"
                                        value={values.Firstname}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <label htmlFor="Lastname" className="mb-1">
                                Last name <span className="text-danger">*</span>
                                </label>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Lastname"
                                        name='Lastname'
                                        required
                                        placeholder="Last name"
                                        aria-label="Last name"
                                        value={values.Lastname}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <label htmlFor="Option" className="mb-1">
                                Type <span className="text-danger">*</span>
                                </label>
                                <div className="input-group mb-3">
                                    <select required className='custom-select mb-3' name='Option' placeholder='Choose...' value={values.Option} onChange={handleInputChange}>
                                        <option value='GuestList'>Guest</option>
                                        <option value='FriendsList'>Friend</option>
                                    </select>
                                </div>
                            {/* <div>
                            <label htmlFor="name">Event Name</label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            />
                            </div>
                            <div>
                            <label htmlFor="performers">Performers</label>
                            <input
                            type="text"
                            name="performers"
                            id="performers"
                            value={values.performers}
                            onChange={handleInputChange}
                            />
                            </div>
                            <div>
                            <label htmlFor="venue">Venue</label>
                            <input
                            type="text"
                            name="venue"
                            id="venue"
                            value={values.venue}
                            onChange={handleInputChange}
                            />
                            </div>
                            <div>
                            <label htmlFor="address">Address</label>
                            <input
                            type="text"
                            name="address"
                            id="address"
                            value={values.address}
                            onChange={handleInputChange}
                            />
                            </div>
                            <div>
                            <label htmlFor="date">Date</label>
                            <input
                            type="date"
                            name="date"
                            id="date"
                            value={values.date}
                            onChange={handleInputChange}
                            />
                            </div>
                            <div>
                            <label htmlFor="time">Time</label>
                            <input
                            type="text"
                            name="time"
                            id="time"
                            value={values.time}
                            onChange={handleInputChange}
                            />
                            </div>
                            </div>

                            <div>
                            <label htmlFor="description">Event Description</label>
                            <textarea
                            type="text"
                            name="description"
                            id="description"
                            value={values.description}
                            onChange={handleInputChange}
                            ></textarea>
                            </div> */}                    
                            </div>
                            <input type="submit" value="Add Event" className="btn" />
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-4">
                    <div>You can add:
                        <div>Guests: {userData.addGuest}</div>
                        <div>Friends: {userData.addFriend}</div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export async function getServerSideProps({ req, query: {slug} }) {

    const { token } = parseCookies(req);

    console.log(token)

    const res = await fetch(
        `${API_URL}/api/events/?filters[slug][$eq]=${slug}&populate=*`
    );
    const json = await res.json();
    const events = json.data;

    const res2 = await fetch(`${API_URL}/api/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    const json2 = await res2.json();
    const addGuest = json2.addGuest;
    const addFriend = json2.addFriend;
    const userId = json2.id;

    return {
        props: {
            token,
            query: slug,
            id: events[0].id,
            addGuest: addGuest,
            addFriend: addFriend,
            userId: userId
        },
    };
}