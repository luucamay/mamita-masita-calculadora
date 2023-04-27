# mamita-masita-calculadora

Calculadora de pesos y gramos para masa madre

## TO DO

- Create the save function
- remove ingredient
- drag ingredient to change display order
- Add percentage symbol next to number in the input value for percentage
- when saving a recipe check input fields are not empty, show error message when a field is empty
- check input for percentage to maybe use typ "tel" because it could display the digits in android app, but maybe in some browsers shows something different
- UI for list display could be based on "Now Playing" or "Listonic"
- edit list
- remove list

## TO DO v2

- crete a component for ingredient in new recipe with its specific styles
- sort ingredients from heavier to lighter?
- how to locally save values until internet connection indexdb or local storage (future version)

## Done

- transform in a PWA
- check it is available ofline

## Learned

- In order to create a PWA you need 2 main files:
  - manifest.json
  - serviceworker.js
- It is key that your service worker caches all the assets you are interested in

## Resources

- how to make your app intalable https://dev.to/codesphere/how-and-why-to-create-a-progressive-web-app-41kb
- advanced codelab to make your app instalable https://web.dev/codelab-make-installable/
- free code camp to create a PWA https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/
