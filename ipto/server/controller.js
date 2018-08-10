module.exports = {
       
    create: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {username, password, profilePic} = req.body

        dbInstance.add_user([username, password, profilePic]).then(()=> res.status(200).send({message: "added item to database"}))
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Error!' });
            console.log(err);
         })
    },    

    loginUser: (req, res, next)=>{
        const { username, password } = req.body
        const dbInstance = req.app.get('db')

        dbInstance.login_user([username, password])
        .then(user=> {
            req.session.user_id= user[0].id
            res.status(200).send(user)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    },

//     getPosts: (req, res, next)=>{
//         const dbInstance = req.app.get('db')
//         const {search, user_posts} = req.query
//         const newSearch = '%'+search+'%'
//         const id = req.session.user_id
        
//         if(search && user_posts){
//         dbInstance.get_posts_filtered([newSearch, id])
//         .then(posts=> res.status(200).send(posts))
//         .catch((err) => {
//             res.status(500).send({ errorMessage: 'Something went wrong!' });
//             console.log(err);
//          })


//     }else if(search){
//         dbInstance.get_posts_search([newSearch])
//         .then(posts=> res.status(200).send(posts))
//         .catch((err) => {
//             res.status(500).send({ errorMessage: 'Something went wrong!' });
//             console.log(err);
//          })

//     }else if(user_posts){
//         dbInstance.get_posts_user([id])
//         .then(posts=> res.status(200).send(posts))
//         .catch((err) => {
//             res.status(500).send({ errorMessage: 'Something went wrong!' });
//             console.log(err);
//          })
//     }
//     else{
//         dbInstance.get_posts([])
//         .then(posts=> res.status(200).send(posts))
//         .catch((err) => {
//             res.status(500).send({ errorMessage: 'Something went wrong!' });
//             console.log(err);
//          })
//     }
// },
//     getSinglePost: (req, res, next)=>{
//         const dbInstance = req.app.get('db')
//         const {id} = req.params
//         console.log('id of req.params', req.params)
//         dbInstance.get_single_post([id]).then(post=>{
//             console.log('post', post)
//             res.status(200).send(post)
//         })
//         .catch((err) => {
//             res.status(500).send({ errorMessage: 'Something went wrong!' });
//             console.log(err);
//          })
        
//     },
//     newPost: (req, res, next)=>{
//         const dbInstance = req.app.get('db')
//         const {title, image_url, content } = req.body
//         const user_id = req.session.user_id
//         dbInstance.add_post([title, image_url, content, user_id])
//         .then(()=> { res.status(200).send({message: 'item added to database'})})
//         .catch((err) => {
//          res.status(500).send({ errorMessage: 'Something went wrong!' });
//          console.log(err);
//       })
//     },
    userInfo: (req, res, next)=>{
        const dbInstance = req.app.get('db')
        const user_id = req.session.user_id
        console.log(user_id, 'user_id')
        dbInstance.get_user_info([user_id])
        .then(user=>{
            console.log('user', user)
            res.status(200).send(user)
        })
        .catch((err) => {
            res.status(500).send({ errorMessage: 'Something went wrong!' });
            console.log(err);
         })
    }

    
}