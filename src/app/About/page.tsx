import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About = () => {
  return (
    <>
    <Header/>
    <div className="text-center p-8">
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      About US?
    </h2>

    <div className="flex flex-wrap items-center mt-20 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            {/* <img src="https://picsum.photos/400/240" alt="gem" className="inline-block rounded shadow-lg border border-merino-400"> */}
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Simple integration
            </h3>
            <p className="sm:text-lg mt-6">
                Use the LocaleData gem to download translations directly into your Ruby on Rails
                projects using the provided command line interface. Just create a project and follow
                the step-by-step instructions.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            {/* <img src="https://picsum.photos/400/240" alt="project members" className="inline-block rounded shadow-lg border border-merino-400"> */}
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Easy collaboration
            </h3>
            <p className="sm:text-lg mt-6">
                All LocaleData projects are private. Each project can have multiple collaborators
                with different roles and access permissions. You determine who can see and edit
                your translations. Just add admins, developers, translators and configure their
                access rights.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            {/* <img src="https://picsum.photos/400/240" alt="editor" className="inline-block rounded shadow-lg border border-merino-400"> */}
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                No more syntax errors
            </h3>
            <p className="sm:text-lg mt-6">
                LocaleData provides you easy import/export functions for your YAML files.
                Use a simple editor with many predefined languages to manage your locales.
                LocaleData also supports multiple translation types, such as simple text, plural forms,
                numbers, booleans, symbols, arrays, ...
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            {/* <img src="https://picsum.photos/400/240" alt="bulk editing" className="inline-block rounded shadow-lg border border-merino-400"> */}
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Bulk editing
            </h3>
            <p className="sm:text-lg mt-6">
                Do you need to change the path of many translation keys at once? No problem, just
                use the bulk editing feature and enjoy the results.
            </p>
        </div>
    </div>

</div>
{/* over vision  */}
<section className="bg-gray-100 py-16">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Our Vision</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>

                </div>
                <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900">Mission</h3>
                    <p className="mt-2 text-base text-gray-500">We aim to make the world a better place through innovation
                        and collaboration.</p>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>

                </div>
                <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900">Values</h3>
                    <p className="mt-2 text-base text-gray-500">We believe in honesty, integrity, and respect for all
                        individuals.</p>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                </div>
                <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900">Vision</h3>
                    <p className="mt-2 text-base text-gray-500">We envision a world where technology is used to solve the
                        most pressing issues facing humanity and improve people's lives.</p>
                </div>
            </div>
        </div>

    </div>
</section>
<Footer/>
    </>
  )
}

export default About