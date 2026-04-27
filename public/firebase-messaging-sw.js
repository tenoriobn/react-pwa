importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js",
);

const firebaseConfig = {
  apiKey: "AIzaSyAHo4KNLLt7x0HXXe6YP-Ca0Ql3D6LY9jo",
  authDomain: "jornada-milhas-e0264.firebaseapp.com",
  projectId: "jornada-milhas-e0264",
  storageBucket: "jornada-milhas-e0264.firebasestorage.app",
  messagingSenderId: "1098464713951",
  appId: "1:1098464713951:web:d6affb822eb00a0e099d6a",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Notificação em segundo plano", payload.notification);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
