export default function StudentProfile({ params }: { params: { id: string } }) {
  // Dummy student data
  const studentData = {
    id: params.id,
    name: "John Doe",
    email: "john.doe@example.com",
    grade: "12th Grade",
    courses: [
      {
        name: "Advanced Mathematics",
        grade: "A",
        progress: 85,
        nextClass: "Calculus Fundamentals",
        schedule: "Mon, Wed 10:00 AM"
      },
      {
        name: "Physics",
        grade: "B+",
        progress: 75,
        nextClass: "Quantum Mechanics Intro",
        schedule: "Tue, Thu 2:00 PM"
      },
      {
        name: "Computer Science",
        grade: "A+",
        progress: 95,
        nextClass: "Data Structures",
        schedule: "Fri 1:00 PM"
      }
    ],
    attendance: 92,
    upcomingAssignments: [
      {
        subject: "Mathematics",
        title: "Differential Equations",
        dueDate: "2024-02-10"
      },
      {
        subject: "Physics",
        title: "Wave Motion Analysis",
        dueDate: "2024-02-12"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Student Profile Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
                {studentData.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">{studentData.name}</h1>
                <p className="text-sm text-gray-500">{studentData.email}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Student ID</p>
              <p className="text-lg font-semibold">{studentData.id}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Academic Overview */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Current Grade */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">Current Grade</h3>
                <p className="mt-1 text-3xl font-semibold text-blue-600">{studentData.grade}</p>
              </div>
            </div>

            {/* Attendance Rate */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">Attendance Rate</h3>
                <p className="mt-1 text-3xl font-semibold text-green-600">{studentData.attendance}%</p>
              </div>
            </div>

            {/* Active Courses */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">Active Courses</h3>
                <p className="mt-1 text-3xl font-semibold text-purple-600">{studentData.courses.length}</p>
              </div>
            </div>
          </div>

          {/* Course Progress */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Course Progress</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              {studentData.courses.map((course, index) => (
                <div key={index} className="border-t border-gray-200 px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Grade: {course.grade}
                    </span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-500">Progress</span>
                      <span className="text-sm text-gray-700">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-gray-500">
                    <p>Next Class: {course.nextClass}</p>
                    <p>Schedule: {course.schedule}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Assignments */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Upcoming Assignments</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200">
                {studentData.upcomingAssignments.map((assignment, index) => (
                  <li key={index} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-600 truncate">
                          {assignment.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {assignment.subject}
                        </p>
                      </div>
                      <div className="ml-2 flex-shrink-0">
                        <p className="text-sm text-gray-500">
                          Due: {new Date(assignment.dueDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
