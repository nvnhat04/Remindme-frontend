function HomeComponent() {
    const introText = " Welcome to Remind Me. It is your smart assistant to manage tasks and keep track of what truly matters.With a simple and intuitive interface, you can easily create notes, set reminders, and monitor your progress anytime, anywhere.Never worry about missing important moments again — RemindMe helps you stay organized, save time, and live more stress-free."
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 py-12 md:py-16 gap-8">
            {/* Left Content */}
            <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
                Task Manager
                </h1>
                <p className="text-gray-500 leading-relaxed mb-6">
                {introText}
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
                </button>
            </div>

        {/* Right Image */}
            <div className="md:w-1/2 flex justify-center">
                <img
                src="/assets/images/home_logo.jpg"
                alt="home"
                className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-xl shadow-lg border-4 border-white"
                />
                
            </div>
        </div>
    );
}

export default HomeComponent;
