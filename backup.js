author.save((err, newAuthor) => {
    if(err) {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error creating author'
        })
    } else {
        // res.redirect(`authors/${newAuthor.id}`)
        res.redirect('authors')
    }
})