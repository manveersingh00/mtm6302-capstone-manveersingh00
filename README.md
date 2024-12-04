# mtm6302-capstone-manveersingh00 Part 4
# Quiz Web Application


## Project Overview
The Quiz Web Application is designed to provide users with random quiz questions based on their selected difficulty level. Users can answer questions. The application tracks the number of correct and incorrect answers and allows users to reset their statistics. There is also a 1-minute timer in each question, so if the user does not take any action, the quiz automatically completes after repeated 10 questions.

## Mockup Overview
This mockup illustrates the key features and layout of the Quiz Web Application. The design aims to create an engaging and user-friendly experience for quiz takers.

### Design Decisions

1. **User Interface Elements**
   - The mockup includes key components such as a question display area, answer input fields, submit buttons, and a statistics summary section.
   - A reset button is also included for user convenience, allowing users to reset their quiz statistics at any time.

2. **Layout and Responsiveness**
   - The mockup showcases layouts for multiple screen sizes, ensuring a responsive design suitable for both desktop and mobile devices.
   - Key features are arranged to provide a seamless user experience, with important actions easily accessible.

3. **Color Scheme and Branding**
   - A vibrant color palette was selected to enhance user engagement and make the application visually appealing.
   - Contrasting colors are used for buttons and feedback messages to improve visibility and user interaction.
   - The branding reflects a fun and educational theme, aligning with the quiz nature of the application.

4. **Typography**
   - Clear and legible fonts were chosen to ensure readability across all devices.
   - Font sizes and styles are consistent, creating a cohesive look throughout the application.

### Resources/Technologies Used
- HTML: For the basic structure of the web application.
- CSS: For styling the application and enhancing user experience.
- Bootstrap: A front-end framework used to make the application responsive and visually appealing.
- JavaScript: For implementing functionality, including quiz logic, score tracking, and API calls.
- QuizAPI: An external API that provides quiz questions based on the selected difficulty level.


## Steps (Creating the Web Application)

# Set Up Project Structure:
Created the necessary HTML, CSS, and JavaScript file.
Linked Bootstrap for responsive design.

# Design the User Interface
Created forms/containers for selecting the difficulty level and displaying quiz questions.
Styled the application using CSS for an appealing layout.

# Implement Functionality with JavaScript:
Written functions to handle user interactions, such as starting the quiz and submitting answers.
Used localStorage to persist scores between sessions.

# Fetch Quiz Data:
Implemented an API call to retrieve quiz questions based on the selected difficulty level.
Parsed the received data and displayed questions and answer options dynamically.

# Manage Quiz Flow:
Implemented a timer for each question and logic to move next question.
Keep track of correct and incorrect answers.

# Testing and Debugging:
Tested the application thoroughly to ensure all features work as expected.
Debugged any issues encountered during testing.


## Challenges

# API Integration: 
Understanding how to effectively fetch and manage data from the Quiz API required some trial and error.
# Score Persistence: 
Implementing local storage to keep track of scores was challenging/
# Responsive Design: 
Ensuring the application was responsive and looked good on different screen sizes took extra effort.


## Conclusion
The Quiz Web Application successfully integrates various web technologies to create an engaging learning tool. Through this project, I gained valuable experience in API integration, front-end development, and user experience design. The challenges faced during development provided opportunities for problem-solving and learning, ultimately enhancing my programming skills.
