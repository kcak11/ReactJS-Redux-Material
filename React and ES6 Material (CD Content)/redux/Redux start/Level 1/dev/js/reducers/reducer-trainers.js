/*
Reducers are peace of code to persist data in store with logic
we can have multiple reducers

 * The users reducer will always return an array of users no matter what
 * You need to return something, 
 so if there are no users then just return an empty array
 * */
//as if this data /state is coming from store
export default function () {
    return [
        {
            id: 1,
            first: "Murthy",
            last: "Sriram",
            age: 48,
            description: ".Net 4.5, MVC 6, React with Redux, Angular 2,Node js",
            thumbnail: "http://imgur.com/KU3b5Wn.jpg"
        },
        {
            id: 2,
            first: "Dhulipala",
            last: "Sri",
            age: 50,
            description: "C,C++,Java,J2EE,Spring Rest Services,Hibernate",
            thumbnail: "http://imgur.com/5fn3jRe.jpg"
        },
        {
            id: 3,
            first: "Kavitha",
            last: "Dhulipala",
            age: 40,
            description: "Softskills, Communication skills, Managerial skills",
            thumbnail: "http://imgur.com/Ob5SniV.jpg"
        }
    ]
}