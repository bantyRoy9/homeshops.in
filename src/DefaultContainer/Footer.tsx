import React from "react";

const Footer: React.FC = () => {
    return (
            <footer className="py-6 mt-10">
                {/* Top Section */}
                <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
                    {/* Column 1 */}
                    <div>
                        <ul className="space-y-2">
                            <li>About</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Press</li>
                            <li>Lead</li>
                            <li>Value</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <ul className="space-y-2">
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>FAQs</li>
                            <li>Security</li>
                            <li>Mobile</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <ul className="space-y-2">
                            <li>Partner</li>
                            <li>Franchise</li>
                            <li>Seller</li>
                            <li>Warehouse</li>
                            <li>Deliver</li>
                            <li>Resources</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <ul className="space-y-2">
                            <li>Vegetables & Fruits</li>
                            <li>Cold Drinks & Juices</li>
                            <li>Bakery & Biscuits</li>
                            <li>Dry Fruits, Masala & Oil</li>
                            <li>Paan Corner</li>
                            <li>Pharma & Wellness</li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                        <ul className="space-y-2">
                            <li>Dairy & Breakfast</li>
                            <li>Instant & Frozen Food</li>
                            <li>Sweet Tooth</li>
                            <li>Sauces & Spreads</li>
                            <li>Organic & Premium</li>
                            <li>Cleaning Essentials</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center my-10 justify-around bg-gray-50 border-neutral-50 mx-auto px-4 py-5 text-xs text-gray-600">
                    <p className="flex-1">© Blink Commerce Private Limited, 2016-2025</p>
                    <div className="flex flex-wrap justify-center items-center space-x-5 flex-1">
                        <h2 className="text-sm font-semibold">Download App</h2>
                        <img src="https://blinkit.com/d61019073b700ca49d22.png" alt="App Store" className="h-8" />
                        <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="Play Store" className="h-8" />
                    </div>
                    <div className="flex flex-1 justify-start gap-10">
                        <a href="/" className="text-gray-500 hover:text-gray-700 ">
                            <i className="fab fa-facebook-f text-white text-lg w-10 h-10 rounded-[100%] bg-black flex justify-center items-center"></i>
                        </a>
                        <a href="/" className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-twitter text-white text-lg w-10 h-10 rounded-[100%] bg-black flex justify-center items-center"></i>
                        </a>
                        <a href="/" className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-instagram text-white text-lg w-10 h-10 rounded-[100%] bg-black flex justify-center items-center"></i>
                        </a>
                        <a href="/" className="text-gray-500 hover:text-gray-700">
                            <i className="fab fa-linkedin-in text-white text-lg w-10 h-10 rounded-[100%] bg-black flex justify-center items-center"></i>
                        </a>
                    </div>
                </div>
                <div className="mt-4 text-gray-500">
                    <p className="text-sm tracking-wide font-light"> “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>
                </div>
            </footer>
    );
};

export default Footer;
