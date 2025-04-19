# Silverback Frontend (Microfrontends)

This directory contains the frontend applications using a microfrontend architecture.

| Module     | Role                          | Stack                     |
|------------|-------------------------------|---------------------------|
| `shell`    | Microfrontend host           | React, Tailwind, Webpack 5 |
| `auth`     | Authentication UI            | React, Tailwind, Apollo   |
| `dashboard`| Main dashboard interface     | React, Tailwind, Apollo   |

Each folder is an independent app that can be developed and deployed separately.
