import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <div className="relative w-full h-[80vh] bg-[url('https://images.pexels.com/photos/728401/pexels-photo-728401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover text-white bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]"></div>
                <div
                    className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-primary-foreground">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Streamline Your School With Our Management Software
                    </h1>
                    <p className="max-w-3xl mt-6 text-lg leading-8">
                        Our school management service provides a secure and efficient way to manage your school base, with powerful
                        features to simplify your workflow.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-3 mt-10 text-sm font-semibold text-primary-foreground transition-colors duration-300 bg-black text-white rounded-md hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
            <section className="py-12 md:py-24 lg:py-32 bg-background">
                <div className="container grid gap-8 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Powerful User Management Features
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our school management service offers a comprehensive suite of features to streamline your school management workflows.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold">User Registration</h3>
                            <p className="text-muted-foreground">
                                Easily onboard new schools with our intuitive registration process.
                            </p>
                        </div>
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold">User Profiles</h3>
                            <p className="text-muted-foreground">
                                Manage school profiles and personal information with ease.
                            </p>
                        </div>
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold">Role-based Access</h3>
                            <p className="text-muted-foreground">
                                Assign and manage school roles and permissions for enhanced security.
                            </p>
                        </div>
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold">User Activity Tracking</h3>
                            <p className="text-muted-foreground">
                                Monitor school activity and behavior with detailed analytics.
                            </p>
                        </div>
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold">Secure Authentication</h3>
                            <p className="text-muted-foreground">
                                Implement robust authentication methods to protect your schools.
                            </p>
                        </div>
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold">User Notifications</h3>
                            <p className="text-muted-foreground">
                                Keep your schools informed with customizable notification settings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container grid gap-8 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Trusted by Businesses Worldwide
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our school management service is trusted by businesses of all sizes, from startups to enterprises.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="flex items-center justify-center">
                                <img
                                    src="/placeholder.svg"
                                    width="140"
                                    height="70"
                                    alt="Logo"
                                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-24 lg:py-32 bg-background">
                <div className="container grid gap-8 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Streamline Your User Management
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Our school management service provides a comprehensive solution to simplify your school management workflows.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold">Seamless Integration</h3>
                            <p className="text-muted-foreground">
                                Easily integrate our school management service with your existing applications and workflows. and best Service 24 by 7
                            </p>
                            <Link
                                to="#"
                                className="inline-flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium text-primary-foreground transition-colors duration-300 bg-black rounded-md hover:bg-black text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className="rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold">Scalable and Reliable</h3>
                            <p className="text-muted-foreground">
                                Our school management service is designed to scale with your growing school base, ensuring reliable performance.
                            </p>
                            <Link
                                to="#"
                                className="inline-flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium text-primary-foreground transition-colors duration-300 bg-black text-white rounded-md hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container grid gap-8 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Get Started Today
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Sign up for our school management service and start streamlining your school management workflows today.
                            </p>
                        </div>
                        <div className="max-w-md w-full">
                            <form className="flex gap-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium text-primary-foreground transition-colors duration-300 bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Navbar />
        </div>
    );
};

export default Home;
