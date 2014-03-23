# precommithooktest

Testing precommit-hook module.

Basic skeleton for a Node.js project.

- Uses Grunt do do the following tasks:

    | task name | description |
    |:----------|-------------|
    | `jscs` | JavaScript Code Style checker. * |
    | `jshint` | Validate files with JSHint. * |
    | `jsonlint` | Validate JSON files. * |
    | `validate-shrinkwrap` |  Submits npm-shrinkwrap.json to nodesecurity.io for validation. |
    | `watch` | Run predefined tasks whenever watched files change. |
    | `lint` | Alias for "validate-shrinkwrap", "jshint", "jscs" tasks. |
    | `default` | Alias for "lint" task. |

This project also uses the `precommit-hook` module to run the `test` npm script (an alias for `$ grunt lint`) before commiting code to a repository.
