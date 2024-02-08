import React, { useState } from 'react';
import bannerImage from '../../assets/images/banner-logo.png';
import dividerLine from '../../assets/images/line.png';
const UsersList: React.FC = () => {
    return (
        <div>
            {/* Top Banner */}
            <div style={{ backgroundColor: '#00334C' }} className="h-14 md:h-74"></div>

            {/* Body Div */}
            <div style={{ backgroundColor: '#102031' }} className="p-4 md:p-8">
                {/* Image */}
                <div className="absolute top-[5px] left-1/2 transform -translate-x-1/2 h-32 md:h-89 overflow-hidden w-[80%] flex justify-center relative'" >
                    <img
                        className="w-[100%] h-full object-cover filter brightness-90 shadow-lg"
                        src={bannerImage}
                        alt="User Image"
                    />
                </div>

                {/* Spacer Div */}
                <div style={{ paddingTop: '25px', paddingBottom: '40px' }}></div>

                {/* Search Box */}
                <div className='h-[20%] w-[100%]'>
                    <div className='flex flex-col items-center w-[100%] h-full text-white '>
                        <div className='w-[100%] flex justify-center relative'>
                            <input type="text" style={{ backgroundColor: '#1C2B3B' }} className=' border border-white w-full p-3 pr-16 text-white' placeholder='Search ...' />
                            <span className='absolute right-4 top-4 cursor-pointer'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Spacer Div */}
                <div style={{ paddingTop: '25px', paddingBottom: '10px' }}></div>

                {/* Table */}
                <div className="w-[100%]">
                    <table className="w-full border border-white">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 ">
                                    <div className="flex items-center justify-between">
                                        <span style={{ color: '#C39639', fontFamily: 'Montserrat, sans-serif', fontSize: '14.33px' }}>Full Name</span>
                                    </div>
                                </th>
                                <th className="py-2 px-4">
                                    <span style={{ color: '#C39639', fontFamily: 'Montserrat, sans-serif', fontSize: '14.33px' }}>Contact</span>
                                </th>
                            </tr>
                            <tr>
                            <th className="py-2 px-4" colSpan={2}>
                                <img
                                    className="w-full object-cover filter brightness-90 shadow-lg bg-white ml-0"
                                    src={dividerLine}
                                    alt="User Image"
                                />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">
                                    <div>
                                        <span style={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontSize: '14.33px' }}>Daniel Hanson</span>
                                        <br />
                                        <span style={{ color: '#fff', fontFamily: 'Montserrat, sans-serif', fontSize: '12px' }}>Customer Premises Manager</span>
                                    </div>
                                </td>
                                <td className="py-2 px-4">
                                    <div className="flex">
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                                <path d="M3 7l9 6l9 -6" />
                                            </svg>
                                        </span>
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle-2-filled" width="24" height="24"
                                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                                style={{ fill: 'white' }}>
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5.821 4.91c3.898 -2.765 9.469 -2.539 13.073 .536c3.667 3.127 4.168 8.238 1.152 11.897c-2.842 3.447 -7.965 4.583 -12.231 2.805l-.232 -.101l-4.375 .931l-.075 .013l-.11 .009l-.113 -.004l-.044 -.005l-.11 -.02l-.105 -.034l-.1 -.044l-.076 -.042l-.108 -.077l-.081 -.074l-.073 -.083l-.053 -.075l-.065 -.115l-.042 -.106l-.031 -.113l-.013 -.075l-.009 -.11l.004 -.113l.005 -.044l.02 -.11l.022 -.072l1.15 -3.451l-.022 -.036c-2.21 -3.747 -1.209 -8.392 2.411 -11.118l.23 -.168z" fill="white" />
                                            </svg>
                                        </span>
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="white" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                                <path d="M8 11l0 5" />
                                                <path d="M8 8l0 .01" />
                                                <path d="M12 16l0 -5" />
                                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                            </svg>
                                        </span>
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download" width="24" height="24" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                                <path d="M7 11l5 5l5 -5" />
                                                <path d="M12 4l0 12" />
                                            </svg>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            {/* Additional rows go here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
