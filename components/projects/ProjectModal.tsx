"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TProject } from './Project'

interface ProjectModalProps {
    d: TProject;
    onClose: () => void;
}

function ProjectModal({ d, onClose }: ProjectModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-4xl max-h-[95vh] rounded-2xl shadow-2xl relative animate-in zoom-in-95 duration-200 overflow-x-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-30 cursor-pointer shadow-sm md:shadow-none"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[95vh] overflow-y-auto">
                    {/* Left Side - Image & Links */}
                    <div className="w-full md:w-5/12 p-5 md:p-6 bg-gray-50 border-r border-gray-100">
                        <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-6 shadow-md">
                            <Image
                                src={d.imgUrl}
                                alt={d.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider">Quick Links</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {d.live && (
                                    <Link target="_blank" href={d.live} className="flex items-center justify-center gap-2 bg-[#5700EF] text-white py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-[#4500c7] transition-colors px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        <span className="truncate">Live Demo</span>
                                    </Link>
                                )}
                                {d.videoDemo && (
                                    <Link target="_blank" href={d.videoDemo} className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-100 transition-colors px-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="truncate">Video</span>
                                    </Link>
                                )}
                                {d.gitClient && (
                                    <Link target="_blank" href={d.gitClient} className="flex items-center justify-center gap-2 border border-black bg-black text-white py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors px-3">
                                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={16} height={16} alt="GitHub" className="invert" />
                                        <span className="truncate">Client Code</span>
                                    </Link>
                                )}
                                {d.gitServer && (
                                    <Link target="_blank" href={d.gitServer} className="flex items-center justify-center gap-2 border border-black bg-black text-white py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-gray-800 transition-colors px-3">
                                        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={16} height={16} alt="GitHub" className="invert" />
                                        <span className="truncate">Server Code</span>
                                    </Link>
                                )}
                            </div>

                            <div className="pt-4 md:pt-6">
                                <h3 className="font-bold text-gray-800 uppercase text-xs tracking-wider mb-2 md:mb-3">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {d.tag?.map((t) => (
                                        <span key={t} className="px-2.5 py-1 bg-white border border-gray-200 text-gray-600 text-[10px] md:text-xs rounded-full shadow-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Details */}
                    <div className="w-full md:w-7/12 p-6 md:p-8 ">
                        <div className="mb-4 md:mb-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1.5">{d.title}</h2>
                            {d.role && <p className="text-[#5700EF] font-semibold text-xs md:text-sm mb-1">{d.role}</p>}
                            {d.duration && <p className="text-gray-500 text-[10px] md:text-xs">{d.duration}</p>}
                        </div>

                        <div className="space-y-5 md:space-y-6">
                            {d.overview && (
                                <section>
                                    <h4 className="text-xs md:text-sm font-bold text-gray-800 uppercase border-b border-gray-100 pb-1 mb-2">Project Overview</h4>
                                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{d.overview}</p>
                                </section>
                            )}

                            {d.status && (
                                <section className="bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                                    <h4 className="text-[10px] md:text-xs font-bold text-blue-800 uppercase mb-1">Status</h4>
                                    <p className="text-blue-900 text-[10px] md:text-xs leading-5">{d.status}</p>
                                </section>
                            )}

                            {d.responsibilities && d.responsibilities.length > 0 && (
                                <section>
                                    <h4 className="text-xs md:text-sm font-bold text-gray-800 uppercase border-b border-gray-100 pb-1 mb-2">Key Responsibilities</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {d.responsibilities.map((r, i) => (
                                            <li key={i} className="text-gray-600 text-xs md:text-sm">{r}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {d.challenges && d.challenges.length > 0 && (
                                <section>
                                    <h4 className="text-xs md:text-sm font-bold text-gray-800 uppercase border-b border-gray-100 pb-1 mb-2">Challenges Faced</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {d.challenges.map((c, i) => (
                                            <li key={i} className="text-gray-600 text-xs md:text-sm">{c}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {d.impact && d.impact.length > 0 && (
                                <section>
                                    <h4 className="text-xs md:text-sm font-bold text-gray-800 uppercase border-b border-gray-100 pb-1 mb-2">Impact & Outcomes</h4>
                                    <ul className="list-disc list-inside space-y-1">
                                        {d.impact.map((im, i) => (
                                            <li key={i} className="text-gray-600 text-xs md:text-sm">{im}</li>
                                        ))}
                                    </ul>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
