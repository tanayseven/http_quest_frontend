module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    'setupFilesAfterEnv': [
        "<rootDir>/test-setup.js",
    ]
}
