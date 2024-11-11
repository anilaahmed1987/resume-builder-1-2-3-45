// // get reference to the form and display area
// const form =document.getElementById ("resume-form") as HTMLFormElement;
// const resumeDisplayElement= document.getElementById("resume-display") as HTMLDivElement

// // Handle form submission
// form.addEventListener("submit",(event:Event)=>{
//     event.preventDefault();   //prevent page reload

//     //collect input value

//     const name  = (document.getElementById ("name") as HTMLInputElement).value
//     const email  = (document.getElementById ("email") as HTMLInputElement).value
//     const phone  = (document.getElementById ("phone") as HTMLInputElement).value
//     const education  = (document.getElementById ("education") as HTMLInputElement).value
//     const experience = (document.getElementById ("experience") as HTMLInputElement).value
//     const skills = (document.getElementById ("skills") as HTMLInputElement).value

//     //generate resume content dynamically

//     const resumeHTML = `
//     <h2><b>Resume</b></h2>
//     <h3>Personal Information</h3>
//     <p><b>Name:</b>${ name }</p>
//     <p><b>email:</b>${ email }</p>
//     <p><b>phone:</b>${ phone }</p>

//     <h3> Education </h3>
//     <p>${education} </p>

//     <h3> Expeience </h3>
//     <p>${experience} </p>
    
//     <h3> Skills </h3>
//     <p>${skills} </p>
    
//     `;
//     //display the generated resume
//     if(resumeDisplayElement){
//         resumeDisplayElement.innerHTML = resumeHTML;
//      } else{
//         console.error("the resume display element is missing.");


//         }
//     }

// );








// // Get reference to the form and resume display element
// const form = document.getElementById("resume-form") as HTMLFormElement | null;
// const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement | null;

// // Handle form submission
// if (form) {
//     form.addEventListener("submit", (event: Event) => {
//         event.preventDefault(); // Prevent the form from submitting in the traditional way
        
//         // Collect input values
//         const name = (document.getElementById("name") as HTMLInputElement)?.value;
//         const email = (document.getElementById("email") as HTMLInputElement)?.value;
//         const phone = (document.getElementById("phone") as HTMLInputElement)?.value;
//         const education = (document.getElementById("education") as HTMLTextAreaElement)?.value;
//         const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value;
//         const skills = (document.getElementById("skills") as HTMLTextAreaElement)?.value;

//         // Generate resume content dynamically
//         const resumeHTML = `
//             <h2><b>Resume</b></h2>
//             <h3>Personal Information</h3>
//             <p><b>Name:</b> ${name}</p>
//             <p><b>Email:</b> ${email}</p>
//             <p><b>Phone:</b> ${phone}</p>

//             <h3>Education</h3>
//             <p>${education}</p>

//             <h3>Experience</h3>
//             <p>${experience}</p>

//             <h3>Skills</h3>
//             <p>${skills}</p>
//         `;

//         // Display the generated resume
//         if (resumeDisplayElement) {
//             resumeDisplayElement.innerHTML = resumeHTML;
//         } else {
//             console.error("The resume display element is missing.");
//         }
//     });
// } else {
//     console.error("The form element is missing.");
// }




