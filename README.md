# Starter-KitV3
This is the latest version of my starter kit that I will be using from now on to build all my websites. It has a completely remade responsive navigation that is much simpler, and easier to edit and customize.  


# Switching between top drop down mobile and and side pop out mobile nav

I built my mobile navs with a max-width media query so I can make any edits I want to them and not affect the desktop design.  This also allows me to swap in different code for different mobile styles and animations. There is a mobile-nav-options.css file that contains seperate code for top drop down and side pop out.  They're wrapped in a max-width: 1023px media query.  Just copy and paste the one you want to sue and it will change the mobile nav from a top drop down to a side pop out one.  No extra work needed!


# Simplified dark mode system.  

My previous one had a bunch of messy code that wasn't organized very well, so I simplified it and removed all the classes you don't need.  I abstracted the toggle code into it's own group and put the core styles in another labeled grouping.  I also added a new dark mode color palette that is much more modern and better on the eye and not as harsh as the straight blacks I was using before.


# How to use the dark mode functionality

Here's the link to read about how it works and even download the code yourself to add to new projects or existing projects

https://www.oakharborwebdesigns.com/blog/2020/december/how-to-add-dark-mode-to-a-website#blog-post

In the LESS file (dark.less), choose the screen size you want to target and inside the body.dark-mode brackets just start adding you new style declarations for dark mode and that’s it!


# SET UP LESS 

  This new starter kit is based on ems for more responsive design.  I have utilized the LESS preprocessor to use its ability to do em calculations.  I use the Koala App to   choose the css file I want to watch and I click the .less files I want to auto compile and hit the compile button.  This will now continuously watch for changes in your .less file inside the css folder and compile the .less into it's own .css file to load instantly on save every time in your local server. 

  Here is the link to download Koala:

  http://koala-app.com/

  You can have it watch multiple .less files and multiple folders at once.  You just have to select each .less file individually and hit the compile button in the lower right.

  INSTALL LESS

  To install the LESS preprocessor, you first must download and install npm so you can install any program you want with one line of code:

  https://nodejs.org/en/download/

  Once that is downloaded and installed, download and install GIT terminal or just use your default terminal window on your computer

  Download GIT
  https://gitforwindows.org/

  OR

  Open the default terminal on your computer
  https://www.ionos.com/help/email/troubleshooting-mail-basicmail-business/access-the-command-prompt-or-terminal/

  Then open your GIT terminal or default computer terminal and copy and paste this in your terminal and hit enter to install LESS

  npm install less

  Now you have LESS on your machine!  Hopefully that wasn't too bad.  It was a little tricky for me to get started too but I used the resources I linked here to figure it out.




  
  
  
# CALCULATING THE EM UNITS

Introduction:
As you may or may not know, em units are based on the font size of its parent element. If the parent element does not have a declared font size in your css, then the next parent element with a declared font size will be it's base.  Since I am not declaring a font size on any containers, literally everything on the page will look up to the body tag for a font size, and since we declared a font size of 20px that is what they will divide themselves by to get the em value.  So I just set the font size on the <body> to be 15px on mobile, tablet, and small desktop up to 1023px wide.  Then on 1024px wide it is set 20 the actual default of 20px.

  
  
Here's a video of me building a website using these em calculations and showing you exactly how it all works with a real project.
  
  https://youtu.be/gUakUDC8UdE
  
  
  
# Explanation of how this system works
  
What happens here, is every single element's measurements that would be in pixels will now be in ems divided 20 (the default font size on desktop).  So when we have an element that is 100px wide, in the .less file we write it as 100/20em, and the compiler will compile it in css as 5em.  Since that em calculation is based on the 20px, when we change the body font size to 15px it will shrink EVERYTHING because the em calculations are on a smaller font size, and will scale down proportionally.  
  
For example, if an element is 20px wide, it will be written as 20/20em in your .less file, and compile to 1em in your .css file.  That is it's ratio.  When we change the font size of the body (the main parent of everything) to a smaller number on mobile (15px), it's scaling the size of 1em to fit in a 15px based font instead of a 20px.  1em would technically be 15/15em, which means by reducing the font size of the body by 5px, EVERYTHING that is based off it's 20px font size will also reduce themselves by 5px in scale.  
  
Both instances of 15/15 and 20/20 result in 1em. The base font size of the parent determines how big the 1em value is scaled up or down by default.  Think of ems as the ratio of the measurement and it's parent font size, and the body font size is telling everything how big or small they need to be.  We are setting the ratio to be based on desktop styles and measurements.  
  
The higher the <body> font size, the larger 1em is scaled by.  Smaller font sizes scale down the size of 1em.  This is how we can control mobile scaling.  You don't have to write separate css styles for your mobile and make larger sizes on desktop.  By writing all our css properties' px values in x/20em, everything will scale itself down on mobile and grow into it's final em scale size at the 20px font size.  
  
Here is an example of this method at work.  All of the css styles are set with the desktop widths, heights, and other dimensions. I built it once and scaled it down for mobile.
  
https://responsive-circle.netlify.app/
  
Inspect the page and resize it manually from 320px to desktop and watch it grow.  The ems and the body font size scale down the entire design proportionally to each other.

  
  

  
  
  
# IMPORTANT!! ******* MUST READ AND UNDERSTAND HOW TO MAKE THIS WORK

For this to work properly and scale PRECISELY, we need the .less calculation system to make this easier.  So if we have an H1 text that is supposed to be 50px, we would write it as 50/20em.  Just like we would normally.  HOWEVER, any of it's properties and children need to be divided by the new declared font size.  So if it has a margin-bottom of 20px, it will be 20/50em, NOT 20/20em.  Their parent has their own font size declared now. Here's an example of how this will look in .less:

```
h2 {
    color: #fff;
    font-size: 24/20em; <--- new declared font size
    line-height: 28/24; <--- Everything inside the h1 is divided by this new font size (line height does not need the em unit added to it)
    margin-bottom: 15/24em; <--- Everything inside the h1 is divided by this new font size

    span {
        display: block;
        color: #fff;
        margin-bottom: 50/24em; <--- Everything inside the h1 is divided by this new font size
    }
}
```
  
  
Also, if this span had a different font size than the h1, we set the new font size divided by the parents new font size.

```
h2 {
    font-size: 24/20em; <--- new font size

    span {
        display: block;
        color: #fff;
        font-size: 50/24em  <--- new font size declared, divided by the parents' font size
        margin-bottom: 50/50em; <--- Everything inside the span is divided by this new font size
    }
} 
```                                 
This is what we have to do to maintain the ratio.  The h1 font size is based on the body, and since it has a new font size, its properties and children will now be based on its new font size, and so on.  Think of them all as working together.  The spans font size is getting their information from the H1s font size, and that H1 is getting its info from the body.  This maintains the proportions of what 1em is scaled to. 

  
  

  
  
                                 
# THE PAYOFF - HOW TO GET 100% TRUE RESPONSIVE BEHAVIOR
Why is this important? Because at 1500px or however wide your design ends up being, you can set the body font size to 1vw, which is the width of the viewport (screen).  When the body size is now determined by the screen size, EVERY element will now grow proportionally with the growth of the screen size.  This is what I mean when I say TRUELY 100% responsive - it responds to the size of the screen and every single element on the page will grow proportionally with each to fit the screen size.  
          
Here's an example showing this in action.  This is a demo link of the current Starter Kit as of November 5, 2021.

https://body-vw-example.netlify.app/

Inspect the page, and set the the viewport at the top to "Dimensions: Responsive" and pull the edge of the screen out to grow the website's width.  At 2000px is where I set the body to font-size: 1vw; and every pixel you make the screen wider by after that you'll notice that every single element on the page is growing at the same scale relative to each other.  The ENTIRE site is now responding to the width of the screen and growing to fit it.  This creates a uniform website experience for everyone, no matter how big their screen is.  This site will look the same viewed on a laptop and a 50in tv without hvaing to write any extra code or using the zoom property, which isn't supported by Firefox.

  
  

  
  
        
# MORE USES FOR THE VW UNIT
Lets say you have a section of 4 cards that you'd like to have displayed in 2 rows of two on mobile.  When you write the styles with the desktop sizes and do your flexboxing but the boxes are still too big fit next to each other on a mobile screen, you can use vw units to scale down the elements.  On the parent container for the items, set the font size with a min/max calculation here:

LESS min/max calculation
font-size:~"min(1.4vw, 1em)";

This is how you have to do calulations in LESS, because otherwise it wont work.  What's happening is we are setting the minimum font size to be the 1.4vw unit, and we can make it however big or small we need.  The smaller the value, the smaller the entire section scales down and vice versa.  1em is the maximum.  So it will start small, and scale up until it reaches the size it's supposed to be at 1em (the body font size) and stop.  
                                 
Example - Start at 320px wide and drag the screen to make it larger.  You'll notice that the circle and all the elements inside of it are growing together proportionally.  This is what happens when you use vw units on the container and ems for everything.  
          
https://responsive-circle.netlify.app/
                                 
So instead of writing new css styles to shrink every element to be smaller, all we have to do is write one line of code and the entire container shrinks proportionally together and maintains their scale from mobile to desktop.  This is the true power of using ems properly and mathematically.
