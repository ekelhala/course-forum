const express = require('express');
const mongoose = require('mongoose');
const {CourseSchema} = require('./models/models');
const router = express.Router();

const Course = mongoose.model('Course', CourseSchema);

router.use(express.json());
router.use((req, res, next) => {
    next();
});

//Palauttaa kaikkien saatavilla olevien kurssien nimet ja id:t
router.get('/courses', (request, response) => {
    Course.find({}, (error, results) => {
        let resultObj = [];
        results.map((result) => {
            resultObj.push({id: result.id, name: result.name});
        });
        response.json(resultObj);
    });
});

//Palauttaa id:n avulla haetun kurssin keskusteluiden aiheet ja id:t
router.get('/courses/:courseid', (request, response) => {
    Course.findById(request.params.courseid, (error, result) => {
        let resultObj = [];
        result.discussions.map((res) => {
            resultObj.push({id: res.id, name: res.name});
        });
        response.json(resultObj);
    });
});

//Palauttaa id:n avulla määritellyn kurssin sisältämän keskustelun aiheen ja viestit
router.get('/courses/:courseid/:discussionid', (request, response) => {
    Course.findById(request.params.courseid, (error, result) => {
        let resultObj = {topic: "", messages: []};
        for(i = 0; i < result.discussions.length; i++) {
            if(result.discussions[i].id == request.params.discussionid) {
                resultObj.topic = result.discussions[i].name;
                resultObj.messages = result.discussions[i].messages;
            }
        }
        response.json(resultObj);
    });
});

//Lähettää uuden viestin keskusteluun
router.post('/courses/:courseId/:discussionId', (request, response) => {
    const messageObject = {text: request.body.message};
    Course.findById(request.params.courseId, (error, result) => {
        for(i = 0; i < result.discussions.length; i++) {
            if(result.discussions[i].id == request.params.discussionId) {
                result.discussions[i].messages.push(messageObject);
                result.save();
                break;                
            }
        }
        response.status(200).send("Message sent!");
    });
});

//Aloittaa uuden keskustelun annetulla kurssilla
router.post('/courses/:courseId', (request, response) => {
    const threadObject = {name: request.body.threadName, messages: []};
    Course.findById(request.params.courseId, (error, result) => {
        result.discussions.push(threadObject);
        result.save();
    });
    response.status(200).send("Message thread created!");
});

module.exports = router;