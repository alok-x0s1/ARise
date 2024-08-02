import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
            <main className="flex-grow">
                <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url('/path/to/your/background/image.jpg')` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-center">
                        <h1 className="text-5xl font-extrabold mb-4">Welcome to ARise</h1>
                        <p className="text-xl mb-8">Discover the best products with unmatched quality and service.</p>
                        <Link to="/signup" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md text-lg">Get Started</Link>
                    </div>
                </section>
                <section className="py-16 px-4 bg-gray-800">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">Our Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 bg-gray-900 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Feature One</h3>
                                <p className="text-gray-400">Detailed explanation of feature one. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="p-8 bg-gray-900 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Feature Two</h3>
                                <p className="text-gray-400">Detailed explanation of feature two. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="p-8 bg-gray-900 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-4">Feature Three</h3>
                                <p className="text-gray-400">Detailed explanation of feature three. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 px-4 bg-gray-700">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
                                <p className="text-gray-400 mb-4">"Amazing service and products! Highly recommend BrandName."</p>
                                <h3 className="text-xl font-bold">Customer One</h3>
                            </div>
                            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
                                <p className="text-gray-400 mb-4">"The best experience I've had with any online store."</p>
                                <h3 className="text-xl font-bold">Customer Two</h3>
                            </div>
                            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
                                <p className="text-gray-400 mb-4">"Top-notch quality and excellent customer support."</p>
                                <h3 className="text-xl font-bold">Customer Three</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-16 px-4 bg-gray-800">
                    <div className="container mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
                        <p className="text-gray-400 mb-8">Have any questions or feedback? We'd love to hear from you.</p>
                        <Link to="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md text-lg">Contact Us</Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;