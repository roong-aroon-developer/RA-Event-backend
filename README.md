# Ra Event
A Progressive Web Application for school anouncement and news made for [Roong Aroon School](http://roong-aroon.ac.th/).
![Screen Shot 2564-08-18 at 01 26 09](https://user-images.githubusercontent.com/40893632/129780528-c0ac4f92-c2a8-4b0f-927c-0ace4ae6ea55.png)

We built a PWA which supports multiple platforms and also includes add to home screen features increasing users exprience flow. This project features React.js and Material.ui for frontend and MongoDb with the Firebase Authentication for data storage and user validation.  

Features:
- OAuth with school's email for rapid usage.
- Split class supports for all anouncement.
- Realtime AQI and temperature measurement.
- Push nortifications (coming on next release)


## Build with
- [React.js](https://reactjs.org/)
- [Material.ui](https://material-ui.com/)
- [Firebase Authentication](https://firebase.google.com/products/auth?gclid=Cj0KCQjwvO2IBhCzARIsALw3ASpP_8P7mAHRn-NzaYZAYGijwzm50DfXwI5R1r7FsZpgQzFL6ENyX6MaAn02EALw_wcB&gclsrc=aw.ds)
- [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_thailand_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624374&gclid=Cj0KCQjwvO2IBhCzARIsALw3ASrv45XwjDPI8IzxFzDyzUqsG6JFilg2QpOjp6qYcwP4yDvtXbiCSLUaAjsGEALw_wcB)



## Getting Start
1. Register Firebase Authentication with Gmaill login option turned on.
2. Clone the repository
   ```sh
   git clone https://github.com/roong-aroon-developer/RA-Event
   ```
3. Build container
   ```sh
   cd RA-Event-backend
   docker-compose build . 
   ```
5. Run container
   ```sh
   docker-compose start
   ```
6. Stop container
   ```sh
   docker-compose stop
   ```
    #### Must be work with
    - [RA Event Admin](https://reactjs.org/)
    - [RA Event Backend](https://reactjs.org/)
    

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Jarukit Jintanasathirakul - [@wit03](https://github.com/wit03) 

Project Link: [https://github.com/roong-aroon-developer/RA-Event](https://github.com/roong-aroon-developer/RA-Event)
