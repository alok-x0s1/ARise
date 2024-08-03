import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col pt-28 items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-6">
            <h1 className="text-5xl font-extrabold text-white mb-6">About Us</h1>
            <div className="max-w-4xl text-center text-gray-400 space-y-4">
                <p>
                    Welcome to our revolutionary e-commerce platform! We are at the forefront of merging traditional online shopping with cutting-edge technology. Our platform allows you to not only view products in a conventional format but also in immersive 3D models and augmented reality. This ensures you get a comprehensive understanding of the product before making a purchase.
                </p>
                <p>
                    <strong>Our Mission</strong>: To enhance the online shopping experience by leveraging advanced technologies, making it as realistic and engaging as possible.
                </p>
                <p>
                    <strong>Our Vision</strong>: To be the leading e-commerce platform that integrates immersive technologies, providing customers with unparalleled shopping experiences.
                </p>
                <p>
                    <strong>Our Team</strong>: Our team consists of highly skilled professionals in the fields of web development, mobile app development, UI/UX design, and augmented reality. We work collaboratively to ensure that our platform is innovative, user-friendly, and reliable.
                </p>
                <p>
                    <strong>Our Values</strong>: We are driven by innovation, customer satisfaction, and continuous improvement. We value feedback from our customers and strive to incorporate it into our platform to make it better every day.
                </p>
                <p>
                    <strong>Why Choose Us?</strong>
                    <ul className="list-disc list-inside text-left">
                        <li><strong>Innovative Technology</strong>: Experience products in 3D and augmented reality.</li>
                        <li><strong>User-Friendly Interface</strong>: Navigate through our platform with ease.</li>
                        <li><strong>Secure Transactions</strong>: Your security is our top priority.</li>
                        <li><strong>Customer Support</strong>: We are here to help you with any queries or issues.</li>
                    </ul>
                </p>
                <p>
                    Thank you for choosing our platform. We are excited to provide you with an exceptional shopping experience that combines the best of technology and convenience.
                </p>
            </div>
        </div>
    );
};

export default About;