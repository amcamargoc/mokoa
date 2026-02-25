Refinements needed:

Improve language switch UX. the defult language is spanish and improve the UX of the language switch.

in Hero section:
 - the image from media is not showed right. let's use a stock image for now. and remove the package image from the hero section.
 - remove the scroll indicator
 - remove "single origin" text on top
 


Keep mobile-first.
Do not over-design.
Maintain calm elegance.


----



refinment in hero section:
- improve the typography of the hero section. make it more premium and less template-like.
- replace "discover our origin" scroll button with a less visual and more elegant scroll indicator. not big button
- improve the overall UX of the hero section. make it more immersive and less generic.
- change picture to a more cinematic one, green, cacao plants, farmers, people working with cacao, etc. the image should be more emotional and less generic.


work on the following improvements:
- improve the language switch UX. make it more intuitive and less confusing. you can use flags as combination of text and image. in spanish use colombian flag, in english use usa flag and in germany use german flag. do not use icons. do not use flags.
- improve transpacency OR background color of the navbar. when text is in background the navbar title overlaps the text. make it more subtle.



Keep mobile-first.
Do not over-design.
Maintain calm elegance.


---

Please update the Hero section component with the following changes:
1. **Background Image Integration:** Download and set the background image of the Hero section to the following URL: `https://cloudfront-eu-central-1.images.arcpublishing.com/williamreed/6YZOR2ZTUVM6TLLLYYWG7P4OEU.jpg`. Save this image to the local `public/assets/media` directory.
2. **Contrast & Readability:** Ensure there is sufficient contrast between the new background image and the text. Adjust the gradient overlays (darkening or lightening as needed) to guarantee the text remains legible across all screen sizes.
3. **Typography & Composition:** Review the current font colors and styles. Modify them if necessary to harmonize perfectly with the color palette of the new picture. However, strictly maintain the current font composition and layout (the specific typography families and the structural placement of the text block).
4. **Responsive Design:** Verify that the image scaling (`object-cover`) and the contrast adjustments work flawlessly on mobile, tablet, and desktop views.


-- 

using agent to transform promts


---

pending: 

1. language swichn with i18n translations
2. fonts of subtext seems to be off
3. meet producer section requires a map in combination with a new photo of producers
4. ingredients sections requires multi language and reffactor text. add alegernys and nutrition table. integrate with promise from the product
5. footer remove find us section and move to another section in the landing pages and add stores already associated
6. mokoa and mokaa in footer are repeated. remove one of them or keep only subtext
7. the green color seems to be too overused. use it variations of it in combination with the rest of the colors palette
8. change © 2026 MOKAO Chocolate Colombiano. All rights reserved. for © 2026 MOKAO. All rights reserved.
9. big screens is not fully responsive


--- 

@prommto in the product section page, showing a mini map with the location of the product is essential, use a free map provider like google maps, open maps or similar that is easy to implement and low configurationto show the location of the producers. the exact location is Maceo, Antioquia, Colombia.
the text should be "this cacao is grown by farming families in Maceo, Antioquia, Colombia, where knowledge has been passed down through generations. The land is respectfully tended and cared for throughout the production process, preserving the soil and its natural cycles so that every harvest reflects both the origin and the people who nurture it."
 we can keep a quote from a farmer or producer talking about the land and the process but it is not essential. the most important thing is the map and the text. the map should be small and elegant, not too big or intrusive. it should be integrated with the text in a way that is visually appealing and easy to understand. a family photo of the producers should be included in this section in a way that is not intrusive and it is integrated with the text and the map. 

+ refactor our roots and from maceo to a more emotional and premium version

*translation*

*Task:** Update the Origin preview component  component to include a new "Location & Origin" feature block containing a mini-map, descriptive text, and a producer family photo.
**Requirements & Context:**
1. **Mini-Map Integration:**
   - Embed a small, elegant, and non-intrusive map pointing to: **Maceo, Antioquia, Colombia**.
   - Use a free, zero-to-low configuration map provider (e.g., a simple OpenStreetMap iframe, Google Maps embed, or a minimal React wrapper) so it is easy to maintain.
2. **Copywriting & Text:**
   - Insert the following exact paragraph:
     > "This cacao is grown by farming families in Maceo, Antioquia, Colombia, where knowledge has been passed down through generations. The land is respectfully tended and cared for throughout the production process, preserving the soil and its natural cycles so that every harvest reflects both the origin and the people who nurture it."
   - *Optional:* Include a styled blockquote from a farmer/producer talking about the land and process. 
3. **Imagery:**
   - Integrate a photo of the producer family. Ensure the placement feels secondary and non-intrusive, harmonizing with the map and the text block.
4. **Design & UX Guidelines:**
   - The layout combining the text, map, and photo must look premium, visually appealing, and uncluttered.
   - Use Tailwind CSS to ensure the section is fully responsive across mobile, tablet, and desktop views.