# VocabiApp

## What is this app?

This a **vocabulary trainer for foreign languages**, the game is as follows,
you sign up (just using your email), specify your **original** language and your
**target** language (the one on that you want to improve your vocabulary)
pick a *part of speech* category, i.e, pronouns, verbs, etc. After selecting
the category, click on a level, inside the level, you'll need to translate the
displayed words into your original language, answering correctly gives you
points! The user with more points will appear at the top of the ranking list of
the home page. Pretty straightforward, isn't it? Well, that kind of explains
everything about the app, have a good time while using it! And, if you want to,
collaborate with its development!

## App details



### Development environment

#### System dependencies

* `ruby` (2.6.5)
* `bundler` (2.0.2)
* `sqlite3` (3.27.2)
* `yarn` (1.19.2)

#### Setup

After cloning the repository and changing your current directory
to the one representing the app, do the following.

```console
bundle install --without=production && yarn install --check-files && \
rails db:migrate && rails db:seed
```

On another terminal (suggestion), run the following command to initialize
a local server so you can see the app in action.

```console
rails server
```

Now visit `localhost:3000` and watch the product working.

#### How to run the test suite

```console
rails test
```

## Future features
- Rebuild with Node and React.
- Deploy to GCP.
- Add feedback button on each question
- Implement algorithm to activate/inactivate question based on feedback.
- Implement algorithm to move questions between levels based on the question success ratio.

## 📞 Contact
- **Tiago Ferreira** - [@tiagoit](https://github.com/tiagoit)

Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/tiagoit-dev/) or drop me a line at <tiagoitferreira@gmail.com>.
