# Rigo Rosero UI Test 

This is the UI test for Zemoga


## First Steps

You will find three branches for this repo **master** , **layout** and **interactive**. 
> master: [https://github.com/Rigo9119/rigo_rosero_UI/tree/master](https://github.com/Rigo9119/rigo_rosero_UI/tree/master)

> layout: [https://github.com/Rigo9119/rigo_rosero_UI/tree/layout](https://github.com/Rigo9119/rigo_rosero_UI/tree/layout)

> interactive: [https://github.com/Rigo9119/rigo_rosero_UI/tree/interactive](https://github.com/Rigo9119/rigo_rosero_UI/tree/interactive)

I decided to use yarn as is the package manager that I feel most confortable with so you can run `yarn install` as soon as you finish downloading the repo.

## Run the project 

To run the project in your local environment: 
`cd rigo_rosero_UI`
`yarn dev`
It will run on `[http://localhost:3000/](http://localhost:3000/) `

## What I use

For this test I decided to use Nuxt Js as it gives me a feeling of a more "traitional" way of development, I like the way in that there are styles, templates and scripts in one single file, also is a tool that I dont reallly use every day and wanted to go out of my confort zone.
 
 ## Project Structure
 ### Components:
```
/components/
	/Footer.vue
	/Header.vue
	/Hero.vue
	/InfoBanner.vue
	/Link.vue
	/Nav.vue
	/OpinionCard.vue
	/PerosnalCard.vue
	/SubmitBar.vue
	/Votes.vue
```
In there you will find a component that I didn't implement which the ```PersonaslCard.vue``` component, I created that component as an attempt to 
break the ```Votes.vue``` component in smaller and reusable components but I couldn't manage to pass all the props that it need in order to work. 

### And Pages

```
/pages/index.vue
/pages/past.vue
/pages/how-it-works.vue
```

## Styles 

For the styles of the test I decided to use ```SCSS``` and create the layout mostly with ```Flexbox```. The reason being that the first one for me is much confortable the normal css plus I could use variables for the colors, font sizes, and mixins.  

## Responsive Design 
I tried to approach a mobile first method so I did use breakpoint and mediqueries, the main two being mobile(iphone x ) and (desktop), which were tested using the chrome dev tools.

### Thanks for reading this read me :), I did enjoy doing it and learn new things   
