import React from 'react'
import { useAuthStore } from '../../store/auth'
import { Link } from 'react-router-dom'

const newsItems = [
    {
        id: 1,
        title: 'John Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        timestamp: '2 hours ago'
    },
    {
        id: 2,
        title: 'John Doe',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam',
        timestamp: '4 hours ago'
    }
];

function Dashboard() {
    const [isLoggedIn, setIsLoggetIn] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user
    ])
    return (
        <>
            {isLoggedIn()
                ? <div>
                    <h1>Dashboard</h1>
                    <Link to={'/logout'}>Logout</Link>
                </div>
                : <div> <h1>Home Page</h1>
                    <Link to={'/myregister'}>Register</Link>
                    <br />
                    <br />
                    <Link to={'/signup'}>SignUp</Link>
                    <br />
                    <br />
                    <Link to={'/login'}>Login</Link>
                </div>
            }

        </>
    )
}

export default Dashboard