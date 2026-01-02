document.addEventListener('DOMContentLoaded', function() {
    const textArray = [
        "Software engineer who turns 3 AM pages into pull requests.",
        "I build fault-tolerant infrastructure, optimize systems at scale, and automate the problems that used to wake people up.",
        "MS CS @ Rutgers."
    ];
    
    const typingDelay = 35; // Speed of typing (ms)
    const lineDelay = 400;   // Delay between lines (ms)
    const newTextDelay = 1000; // Initial delay before starting
    
    let lineIndex = 0;
    let charIndex = 0;
    
    const typedTextSpan = document.querySelector(".hero-subtext");
    const cursorSpan = document.querySelector(".typing-cursor");

    // Initialize: clear any fallback text and ensure cursor is there
    if(typedTextSpan) {
        typedTextSpan.innerHTML = '<span class="typing-cursor">|</span>'; 
    }

    function type() {
        if (lineIndex < textArray.length) {
            const currentLine = textArray[lineIndex];
            
            if (charIndex < currentLine.length) {
                // Remove cursor
                let currentHTML = typedTextSpan.innerHTML;
                currentHTML = currentHTML.replace('<span class="typing-cursor">|</span>', '');
                
                // Add char + cursor
                typedTextSpan.innerHTML = currentHTML + currentLine.charAt(charIndex) + '<span class="typing-cursor">|</span>';
                
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                // Line finished
                lineIndex++;
                charIndex = 0;
                
                // Add <br> if not the last line
                if (lineIndex < textArray.length) {
                     // Remove cursor temporarily to add break
                     let currentHTML = typedTextSpan.innerHTML;
                     currentHTML = currentHTML.replace('<span class="typing-cursor">|</span>', '');
                     typedTextSpan.innerHTML = currentHTML + '<br>' + '<span class="typing-cursor">|</span>';
                     
                     setTimeout(type, lineDelay);
                }
            }
        }
    }

    // Start the typing effect
    if(textArray.length > 0 && typedTextSpan) {
        setTimeout(type, newTextDelay);
    }
});
