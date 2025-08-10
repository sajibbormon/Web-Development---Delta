/**
 * Faker
 ----------
It is used to generate fake data to test software while implementing

userId      username    email       password

let getUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};


To install this: npm i @faker-js/faker

 */