# mamita-masita-calculadora

Calculadora de pesos y gramos para masa madre

## TO DO

- when saving a recipe check input fields are not empty, show error message when a field is empty
- remove ingredient
- keep the date a recipe is added and show it on top
- edit recipe
- remove recipe
- drag ingredient to change display order
- save recipes to a local database \*(local storage?) not only on memory

## TO DO v2

- crete a component for ingredient in new recipe with its specific styles
- sort ingredients from heavier to lighter?
- how to locally save values until internet connection indexdb or local storage (future version)
- for each input you should only create the first time but when update only update the values so you do not have to add event listeners and create elements again.

## Done

- transform in a PWA
- check it is available ofline
- Create the save function
- Add percentage symbol next to number in the input value for percentage
- Add style to the view recipes ui
- check input for percentage to maybe use typ "tel" because it could display the digits in android app, but maybe in some browsers shows something different
- UI for list display could be based on "Now Playing" or "Listonic"
- verificar los calculos de masa madre
- in the view of an element calculate add listener to an input to calculate the total weight

## Learned

- In order to create a PWA you need 2 main files:
  - manifest.json
  - serviceworker.js
- It is key that your service worker caches all the assets you are interested in

## Resources

- how to make your app intalable https://dev.to/codesphere/how-and-why-to-create-a-progressive-web-app-41kb
- advanced codelab to make your app instalable https://web.dev/codelab-make-installable/
- free code camp to create a PWA https://www.freecodecamp.org/news/build-a-pwa-from-scratch-with-html-css-and-javascript/

## timelog

Tue 25/4/2023 -> 2hrs
Wed 26/4/2023 -> 3hrs 22min
Thur 27/4/2023 -> 4hrs
