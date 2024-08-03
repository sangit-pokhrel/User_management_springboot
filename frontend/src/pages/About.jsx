import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">

            <main className="flex-1">
                <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y bg-blue-400 py-32">
                    <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div>
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                    About Us
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Learn more about our mission and values.
                                </p>
                            </div>
                            <div className="flex flex-col items-start space-y-4">
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
                                    className="h-12 w-12 text-primary"
                                >
                                    <path d="M14 22v-4a2 2 0 1 0-4 0v4"></path>
                                    <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
                                    <path d="M18 5v17"></path>
                                    <path d="m4 6 8-4 8 4"></path>
                                    <path d="M6 5v17"></path>
                                    <circle cx="12" cy="9" r="2"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container space-y-12 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our History, Mission and Values</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Acme School has been providing quality education for over 50 years. Our mission is to empower students
                                    to reach their full potential and become responsible, compassionate global citizens. We value academic
                                    excellence, diversity, and community engagement.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <div className="grid gap-1">
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
                                    className="h-8 w-8 text-primary"
                                >
                                    <path d="M8 2v4"></path>
                                    <path d="M16 2v4"></path>
                                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                    <path d="M3 10h18"></path>
                                </svg>
                                <h3 className="text-lg font-bold">History</h3>
                                <p className="text-sm text-muted-foreground">
                                    Acme School was founded in 1970 with the goal of providing quality education to the local community.
                                    Over the years, we have grown to become a respected institution, known for our academic excellence and
                                    commitment to student success.
                                </p>
                            </div>
                            <div className="grid gap-1">
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
                                    className="h-8 w-8 text-primary"
                                >
                                    <circle cx="12" cy="4.5" r="2.5"></circle>
                                    <path d="m10.2 6.3-3.9 3.9"></path>
                                    <circle cx="4.5" cy="12" r="2.5"></circle>
                                    <path d="M7 12h10"></path>
                                    <circle cx="19.5" cy="12" r="2.5"></circle>
                                    <path d="m13.8 17.7 3.9-3.9"></path>
                                    <circle cx="12" cy="19.5" r="2.5"></circle>
                                </svg>
                                <h3 className="text-lg font-bold">Mission</h3>
                                <p className="text-sm text-muted-foreground">
                                    Our mission is to empower students to reach their full potential and become responsible, compassionate
                                    global citizens. We strive to create a nurturing and inclusive learning environment that fosters
                                    academic excellence, critical thinking, and personal growth.
                                </p>
                            </div>
                            <div className="grid gap-1">
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
                                    className="h-8 w-8 text-primary"
                                >
                                    <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"></path>
                                    <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                    <path d="M21 15s-4 3-9 3-9-3-9-3v-3c0 0 4-3 9-3s9 3 9 3v3z"></path>
                                </svg>
                                <h3 className="text-lg font-bold">Values</h3>
                                <p className="text-sm text-muted-foreground">
                                    We value academic excellence, diversity, and community engagement. We believe in fostering a
                                    supportive environment that encourages lifelong learning, respect for others, and a commitment to
                                    making a positive impact on the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default About;
