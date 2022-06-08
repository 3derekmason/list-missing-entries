# list-missing-entries

```sh
listMissingEntries(object);
```

Returns a count and list of any falsey fields in an object.

[Npm package](https://www.npmjs.com/package/list-missing-entries)

[Github repo](https://github.com/3derekmason/list-missing-entries)

## Installation

```sh
npm install list-missing-entries
```

## Usage

```sh
import listMissingEntries from "list-missing-entries";
```

### - Inputs -

`object` - Any object of data that could potentially have an empty value.

### - Outputs -

By default will return the number missing fields and a stringified array of all missing elements.

> If **listMissingEntries** is given an input that isn't an object and error message will return.

Thanks for reading!
