document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const gradYear = document.getElementById('gradYear').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const yearsWorked = document.getElementById('yearsWorked').value;
    const skills = document.getElementById('skills').value;

    // Generate Resume HTML
    const resumeHTML = `
        <h2>${fullName}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phoneNumber}</p>
        <h3>Education</h3>
        <p>${degree}, ${university} (${gradYear})</p>
        <h3>Work Experience</h3>
        <p>${jobTitle} at ${company} (${yearsWorked} years)</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display preview
    document.getElementById('resumePreview').innerHTML = resumeHTML;
});

document.getElementById('downloadPDF').addEventListener('click', function() {
    // Functionality to download PDF
    // You'll need a library like jsPDF for generating PDF
});

document.getElementById('downloadDOC').addEventListener('click', function() {
    // Functionality to download DOC
    // You'll need a library like docxtemplater for generating DOC
});
document.getElementById('downloadPDF').addEventListener('click', function() {
    const resumeHTML = document.getElementById('resumePreview').innerHTML;

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Convert HTML to PDF
    pdf.html(resumeHTML, {
        callback: function(pdf) {
            // Save the PDF
            pdf.save('resume.pdf');
        }
    });
});
document.getElementById('template').addEventListener('change', function() {
    const selectedTemplate = this.value;

    // Apply template-specific styles
    if (selectedTemplate === 'template1') {
        document.getElementById('resumePreview').classList.add('template1');
        document.getElementById('resumePreview').classList.remove('template2', 'template3');
    } else if (selectedTemplate === 'template2') {
        document.getElementById('resumePreview').classList.add('template2');
        document.getElementById('resumePreview').classList.remove('template1', 'template3');
    } else if (selectedTemplate === 'template3') {
        document.getElementById('resumePreview').classList.add('template3');
        document.getElementById('resumePreview').classList.remove('template1', 'template2');
    }
});
