// Course data structure
const courseData = {
    "B.Tech": {
        icon: "💻",
        description: "Bachelor of Technology",
        subjects: {
            "DBMS": {
                icon: "🗄️",
                fullName: "Database Management Systems",
                units: {
                    "Unit 1": {
                        name: "Introduction to DBMS",
                        notesPdf: "assets/pdfs/btech/dbms/unit1.pdf",
                        videos: [
                            {
                                title: "DBMS Introduction",
                                videoId: "c5HAwKX-suM"
                            },
                            {
                                title: "Database Fundamentals",
                                videoId: "FR4QIeZaPeM"
                            }
                        ],
                        books: [
                            {
                                title: "Database System Concepts",
                                author: "Abraham Silberschatz, Henry F. Korth"
                            },
                            {
                                title: "Fundamentals of Database Systems",
                                author: "Ramez Elmasri, Shamkant B. Navathe"
                            }
                        ]
                    },
                    "Unit 2": {
                        name: "SQL and Relational Algebra",
                        notesPdf: "assets/pdfs/btech/dbms/unit2.pdf",
                        videos: [
                            {
                                title: "SQL Tutorial for Beginners",
                                videoId: "HXV3zeQKqGY"
                            }
                        ],
                        books: [
                            {
                                title: "SQL Queries for Mere Mortals",
                                author: "John L. Viescas"
                            }
                        ]
                    },
                    "Unit 3": {
                        name: "Normalization",
                        notesPdf: "assets/pdfs/btech/dbms/unit3.pdf",
                        videos: [
                            {
                                title: "Database Normalization",
                                videoId: "GFQaEYEc8_8"
                            }
                        ],
                        books: [
                            {
                                title: "Database Design for Mere Mortals",
                                author: "Michael J. Hernandez"
                            }
                        ]
                    }
                }
            },
            "Operating System": {
                icon: "🖥️",
                fullName: "Operating Systems",
                units: {
                    "Unit 1": {
                        name: "Introduction to OS",
                        notesPdf: "assets/pdfs/btech/os/unit1.pdf",
                        videos: [
                            {
                                title: "Operating System Basics",
                                videoId: "vBURTt97EkA"
                            }
                        ],
                        books: [
                            {
                                title: "Operating System Concepts",
                                author: "Abraham Silberschatz"
                            }
                        ]
                    },
                    "Unit 2": {
                        name: "Process Management",
                        notesPdf: "assets/pdfs/btech/os/unit2.pdf",
                        videos: [
                            {
                                title: "Process Management in OS",
                                videoId: "OrM7nZcxXZU"
                            }
                        ],
                        books: [
                            {
                                title: "Modern Operating Systems",
                                author: "Andrew S. Tanenbaum"
                            }
                        ]
                    }
                }
            },
            "Data Structures": {
                icon: "🔗",
                fullName: "Data Structures",
                units: {
                    "Unit 1": {
                        name: "Arrays and Linked Lists",
                        notesPdf: "assets/pdfs/btech/ds/unit1.pdf",
                        videos: [
                            {
                                title: "Data Structures Introduction",
                                videoId: "RBSGKlAvoiM"
                            }
                        ],
                        books: [
                            {
                                title: "Data Structures and Algorithms in Java",
                                author: "Robert Lafore"
                            }
                        ]
                    }
                }
            }
        }
    },
    "MCA": {
        icon: "🎓",
        description: "Master of Computer Applications",
        subjects: {
            "Java Programming": {
                icon: "☕",
                fullName: "Advanced Java Programming",
                units: {
                    "Unit 1": {
                        name: "Java Fundamentals",
                        notesPdf: "assets/pdfs/mca/java/unit1.pdf",
                        videos: [
                            {
                                title: "Java Tutorial for Beginners",
                                videoId: "eIrMbAQSU34"
                            }
                        ],
                        books: [
                            {
                                title: "Head First Java",
                                author: "Kathy Sierra, Bert Bates"
                            }
                        ]
                    }
                }
            },
            "Web Development": {
                icon: "🌐",
                fullName: "Web Development",
                units: {
                    "Unit 1": {
                        name: "HTML & CSS Basics",
                        notesPdf: "assets/pdfs/mca/web/unit1.pdf",
                        videos: [
                            {
                                title: "HTML & CSS Crash Course",
                                videoId: "UB1O30fR-EE"
                            }
                        ],
                        books: [
                            {
                                title: "HTML and CSS: Design and Build Websites",
                                author: "Jon Duckett"
                            }
                        ]
                    }
                }
            }
        }
    },
    "MBA": {
        icon: "💼",
        description: "Master of Business Administration",
        subjects: {
            "Marketing Management": {
                icon: "📊",
                fullName: "Marketing Management",
                units: {
                    "Unit 1": {
                        name: "Introduction to Marketing",
                        notesPdf: "assets/pdfs/mba/marketing/unit1.pdf",
                        videos: [
                            {
                                title: "Marketing Basics",
                                videoId: "GX9dRfiDM8c"
                            }
                        ],
                        books: [
                            {
                                title: "Marketing Management",
                                author: "Philip Kotler"
                            }
                        ]
                    }
                }
            },
            "Human Resource Management": {
                icon: "👥",
                fullName: "Human Resource Management",
                units: {
                    "Unit 1": {
                        name: "HRM Fundamentals",
                        notesPdf: "assets/pdfs/mba/hrm/unit1.pdf",
                        videos: [
                            {
                                title: "HRM Basics",
                                videoId: "PYkHuz8Uzww"
                            }
                        ],
                        books: [
                            {
                                title: "Human Resource Management",
                                author: "Gary Dessler"
                            }
                        ]
                    }
                }
            }
        }
    },
    "B.Sc": {
        icon: "🔬",
        description: "Bachelor of Science",
        subjects: {
            "Physics": {
                icon: "⚛️",
                fullName: "Physics",
                units: {
                    "Unit 1": {
                        name: "Mechanics",
                        notesPdf: "assets/pdfs/bsc/physics/unit1.pdf",
                        videos: [
                            {
                                title: "Physics - Mechanics",
                                videoId: "b1t41Q3xRM8"
                            }
                        ],
                        books: [
                            {
                                title: "Concepts of Physics",
                                author: "H.C. Verma"
                            }
                        ]
                    }
                }
            },
            "Mathematics": {
                icon: "📐",
                fullName: "Mathematics",
                units: {
                    "Unit 1": {
                        name: "Calculus",
                        notesPdf: "assets/pdfs/bsc/math/unit1.pdf",
                        videos: [
                            {
                                title: "Calculus Basics",
                                videoId: "WUvTyaaNkzM"
                            }
                        ],
                        books: [
                            {
                                title: "Calculus",
                                author: "James Stewart"
                            }
                        ]
                    }
                }
            }
        }
    },
    "BBA": {
        icon: "🏢",
        description: "Bachelor of Business Administration",
        subjects: {
            "Business Communication": {
                icon: "💬",
                fullName: "Business Communication",
                units: {
                    "Unit 1": {
                        name: "Communication Basics",
                        notesPdf: "assets/pdfs/bba/communication/unit1.pdf",
                        videos: [
                            {
                                title: "Business Communication",
                                videoId: "P72G1XjGKMQ"
                            }
                        ],
                        books: [
                            {
                                title: "Business Communication Today",
                                author: "Bovée and Thill"
                            }
                        ]
                    }
                }
            }
        }
    },
    "M.Tech": {
        icon: "🎯",
        description: "Master of Technology",
        subjects: {
            "Machine Learning": {
                icon: "🤖",
                fullName: "Machine Learning",
                units: {
                    "Unit 1": {
                        name: "Introduction to ML",
                        notesPdf: "assets/pdfs/mtech/ml/unit1.pdf",
                        videos: [
                            {
                                title: "Machine Learning Basics",
                                videoId: "ukzFI9rgwfU"
                            }
                        ],
                        books: [
                            {
                                title: "Pattern Recognition and Machine Learning",
                                author: "Christopher Bishop"
                            }
                        ]
                    }
                }
            }
        }
    }
};
