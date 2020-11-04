var stories = [
	{
		"createdBy": 2,
		"status": "approved",
		"summary": "1st story created by 2",
		"description": "dummy desc",
		"type": "enhancement",
		"complexity": "high",
		"estimatedHrs": 1,
		"cost": 100
	},
	{
		"createdBy": 2,
		"status": "approved",
		"summary": "2nd story created by 2",
		"description": "dummy desc",
		"type": "enhancement",
		"complexity": "high",
		"estimatedHrs": 1,
		"cost": 100
	},
	{
		"createdBy": 3,
		"status": "rejected",
		"summary": "story created by 3",
		"description": "dummy desc",
		"type": "enhancement",
		"complexity": "high",
		"estimatedHrs": 1,
		"cost": 100
	}
]


let users = [
    {
        "userRoles": [
            "User"
        ],
        "firstName": "Alpha",
        "lastName": "User",
        "id": 2
    }
]

let admin = [
    {
        "userRoles": [
            "Admin"
        ],
        "firstName": "John",
        "lastName": "Doe",
        "id": 1
    }
]

function createStory(data) {
    data.status = 'unapproved'
    stories.push(data)

    return true
}

function approveOrReject(storyID, status) {
    
}

function getStories() {
    return stories
}

export {
    createStory,
    getStories,
    approveOrReject
}