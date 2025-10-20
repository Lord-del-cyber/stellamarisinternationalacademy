import React from 'react';
import {
    Calculator,
    Languages,
    Globe,
    Paintbrush,
    Laptop,
    Briefcase,
    FlaskConical,
    Medal,
} from 'lucide-react';

export default function SubjectsOffered() {
    return (
        <section id="subjects" className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Subjects Offered</h2>
                <p className="text-center text-lg text-gray-600 mb-6">Explore a wide range of subjects tailored to enhance your learning experience.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-primary text-4xl mb-4 mx-auto bg-gray-200 p-2 w-fit h-fit rounded-smd">
                            <Calculator className='size-14' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
                        <p className="text-gray-600">Comprehensive math curriculum from basic arithmetic to advanced calculus.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-primary text-4xl mb-4 mx-auto bg-gray-200 p-2 w-fit h-fit rounded-smd">
                            <FlaskConical className='size-14' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Science</h3>
                        <p className="text-gray-600">Physics, Chemistry, Biology with modern laboratory facilities.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-primary text-4xl mb-4 mx-auto bg-gray-200 p-2 w-fit h-fit rounded-smd">
                            <Languages className='size-14' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Languages</h3>
                        <p className="text-gray-600">English, French, Spanish, and native language studies.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-primary text-4xl mb-4 mx-auto bg-gray-200 p-2 w-fit h-fit rounded-smd">
                            <Globe className='size-14' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Social Studies</h3>
                        <p className="text-gray-600">History, Geography, Civics, and Economics.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-primary text-4xl mb-4 mx-auto bg-gray-200 p-2 w-fit h-fit rounded-smd">
                            <Paintbrush className='size-14' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Arts</h3>
                        <p className="text-gray-600">Visual arts, Music, Drama, and Creative writing.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-primary text-4xl mb-4 mx-auto bg-gray-200 p-2 w-fit h-fit rounded-smd">
                            <Laptop className='size-14' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Technology</h3>
                        <p className="text-gray-600">Computer Science, Robotics, and Digital Literacy.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-primary text-4xl mb-4 mx-auto bg-gray-200 p-2 w-fit h-fit rounded-smd">
                            <Medal className='size-12' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Physical Education</h3>
                        <p className="text-gray-600">Sports, Fitness, and Health education programs.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-primary text-4xl mb-4 mx-auto bg-gray-200 p-2 w-fit h-fit rounded-smd">
                            <Briefcase className='size-12' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Business Studies</h3>
                        <p className="text-gray-600">Accounting, Entrepreneurship, and Economics.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}