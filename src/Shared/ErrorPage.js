import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 bg-white text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl text-gray-400">
                   <img src="https://cdn.dribbble.com/users/1138875/screenshots/4669703/media/c25729131efb71198034c0275c21aea8.gif" alt="" />
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                <Link to='/' className="px-8 py-3 font-semibold rounded bg-blue-500 text-gray-50">Back to homepage</Link>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;