// Service Worker para notificaciones push
self.addEventListener('install', function (event) {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  console.log('Service Worker activado');
  event.waitUntil(self.clients.claim());
});

// Función para mostrar notificación
function showNotification(title, options) {
  if (Notification.permission === 'granted') {
    self.registration.showNotification(title, {
      ...options,
      icon: '/favicon.svg',
      badge: '/favicon.svg',
      vibrate: [100, 50, 100],
      requireInteraction: true,
      actions: [
        {
          action: 'celebrate',
          title: '🎉 ¡Celebrar!'
        },
        {
          action: 'close',
          title: 'Cerrar'
        }
      ]
    });
  }
}

// Escuchar clics en las notificaciones
self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  if (event.action === 'celebrate') {
    // Abrir la página del portfolio
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Función para verificar fechas importantes
function checkImportantDates() {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  // 20 de enero (mes 0)
  if (todayMonth === 0 && todayDay === 20) {
    showNotification('🎂 ¡Feliz Cumpleaños, Naiara! 🎉', {
      body: '¡Hoy es tu día especial! Que tengas un cumpleaños maravilloso lleno de alegría y sorpresas.',
      tag: 'birthday'
    });
  }

  // 2 de septiembre (mes 8)
  if (todayMonth === 8 && todayDay === 2) {
    showNotification('💕 ¡Feliz Aniversario! ❤️', {
      body: '¡Hoy celebramos vuestro aniversario! Un día muy especial para recordar y celebrar.',
      tag: 'anniversary'
    });
  }
}

// Verificar cada hora si es una fecha importante
setInterval(checkImportantDates, 60 * 60 * 1000); // Cada hora

// Verificar inmediatamente cuando se active el SW
self.addEventListener('activate', function (event) {
  checkImportantDates();
});
