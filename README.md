[View Hosted Site](https://therapyderbyshire.co.uk/)
# Therapy Derbyshire
## Technologies

1. JavaScript
2. React
3. CSS

## Overview
One of my freelance clients kindly let me publicly share their custom site I developed and designed. This site was created using React to help lower development time, it's a single page site with integrated contact form. The purpose of this website is to:

1. Present key information about the business.
2. Direct users to contact the business.

The client was previously using a CMS based site and was looking for a more custom page to suit their brand. As they get most of their traffic from a third party organisation site, the main focus for this website is to make the business seem friendly and approachable and keep user attention, directing them to get in touch. 

## Challenges
### Animations
One of the most complex parts of the sites animation is the 'Contact Us' / 'Send Message' button animation. This animation uses a CSS clip-path based wave animation, and with a mixture of 'position: absolute' and 'overflow: hidden' can be hidden and triggered with a hover event.

### Implementing icons
As the budget for this site wasn't very high, I didn't have access to any custom illustrations and so I relied on free icons with reference. These icons were in the .png format however and so getting them to match to colour scheme was difficult. I ended up using pure CSS to solve this, with 'filter: invert(100%)'. This is a trick that can be used to make any dark text become light, which is something I learned from dealing with prebuilt wordpress embeds from other clients. 
