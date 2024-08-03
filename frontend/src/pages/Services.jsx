import React from 'react';
import Navbar from '../components/Navbar';

const Services = () => {
    return (
        <div>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full  md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center ">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                                        Streamline Your School Management
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Our school management software helps you manage student enrollment, attendance, grades, and
                                        parent-teacher communication with ease.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-black text-white px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-black text-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white"
                                    >
                                        Login
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white"
                                    >
                                        Contact us
                                    </a>
                                </div>
                            </div>
                            <img
                                src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=600"
                                width="550"
                                height="550"
                                alt="Hero"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                            />
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your School Management</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our school management software helps you manage all aspects of your school, from student enrollment to
                                    parent-teacher communication.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                            {/* Feature Cards */}
                            {[
                                {
                                    title: "Student Enrollment",
                                    description: "Easily manage student enrollment, including registration, admissions, and record-keeping.",
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 text-primary-foreground"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    )
                                },
                                {
                                    title: "Attendance Tracking",
                                    description: "Keep track of student attendance and generate reports with ease.",
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 text-primary-foreground"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                    )
                                },
                                {
                                    title: "Attendance Tracking",
                                    description: "Keep track of student attendance and generate reports with ease.",
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 text-primary-foreground"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                    )
                                },
                                {
                                    title: "Attendance Tracking",
                                    description: "Keep track of student attendance and generate reports with ease.",
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 text-primary-foreground"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                    )
                                },
                                {
                                    title: "Attendance Tracking",
                                    description: "Keep track of student attendance and generate reports with ease.",
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 text-primary-foreground"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                    )
                                },
                                {
                                    title: "Attendance Tracking",
                                    description: "Keep track of student attendance and generate reports with ease.",
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-6 h-6 text-primary-foreground"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                    )
                                },
                                // Add other features here
                            ].map((feature, index) => (
                                <div key={index} className="grid gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-black text-white rounded-md p-3 flex items-center justify-center">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Hear from the schools and districts that have transformed their operations with our school management
                                    software.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                            {/* Testimonial Cards */}
                            {[
                                {
                                    name: "Jane Doe",
                                    role: "Principal, Acme School",
                                    text: "Our school has seen a significant improvement in efficiency and organization since we started using the school management software. It has streamlined our processes and made it easier to keep track of everything.",
                                },
                                {
                                    name: "John Smith",
                                    role: "Teacher, Acme School",
                                    text: "The school management software has been a game-changer for our school. It has made it so much easier to track student attendance, grades, and communicate with parents. I highly recommend it.",
                                },
                                {
                                    name: "John Smith",
                                    role: "Teacher, Acme School",
                                    text: "The school management software has been a game-changer for our school. It has made it so much easier to track student attendance, grades, and communicate with parents. I highly recommend it.",
                                },

                                // Add other testimonials here
                            ].map((testimonial, index) => (
                                <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                                    <div className="p-6">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src="/placeholder.svg"
                                                    width="48"
                                                    height="48"
                                                    alt="Avatar"
                                                    className="rounded-full"
                                                    style={{ aspectRatio: "48 / 48", objectFit: "cover" }}
                                                />
                                                <div>
                                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground">{testimonial.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Call to Action Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Ready to Get Started?
                            </h2>
                            <p className="max-w-[900px] text-lg">
                                Transform the way you manage your school with our comprehensive management software. Contact us today to
                                learn more or schedule a demo.
                            </p>
                            <a
                                href="#"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-black"
                            >
                                Schedule a Demo
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Services;
