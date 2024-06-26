// src/i18n/en.js
import { es } from 'vuetify/locale'

export default {
  $vuetify: { ...es },
  all: "Todos",
  close: "Cerrar",
  cancel: "Cancelar",
  restart: "Restart",
  restarted: "Restarted",
  refresh: "Actualizar",
  disconnect: "Desconectar",
  sure: "Estas Seguro?",
  save: "Guardar",
  step: "Passo {step}",
  instance: "Instancia | Instancias",
  search: "Buscar",
  loading: "Cargando",
  noInstances: "No se encontraron instancias",
  unknown: "Unknown",
  required: "{field} es requerido",
  maxLength: "{field} debe tener un máximo de {length} caracteres",
  https: "{field} debe comenzar con https://",
  httpHttps: "{field} debe comenzar con http:// or https://",
  enabled: "Activar",
  events: "Eventos",
  name: "Nombre",
  version: {
    availableFrom: "Disponible desde la versión {version}",
  },
  status: {
    close: "Desconectado",
    connecting: "Conectando",
    open: "Conectado",
  },
  toggleSelect: {
    all: "Seleccionar todos",
    none: "Desmarcar todos",
  },
  about: {
    title: "Acerca de",
    description: "Evolution Manager facilita la gestión de sus API con una interfaz intuitiva. Fue creado por desarrolladores independientes, enfocándose en mejorar la experiencia del usuario y la administración de las funcionalidades API.",
    contribute: "Contribuir con proyecto",
    dataProcess: {
      title: "Procesamiento de datos",
      description: "El procesamiento y almacenamiento de datos se produce <b>localmente</b> en su navegador, sin el uso de un servidor centralizado. Esto refuerza la seguridad y privacidad, manteniendo protegida su información confidencial.",
      https: "Debido a que todo el procesamiento se realiza en el navegador, es necesario acceder al servidor API de Evolution a través de una conexión segura (HTTPS)."
    },
    version: "Version",
  },
  createInstance: {
    title: "Crear instancia",
    name: "Nombre de la instancia",
    configInfo: "El WebHook, WebSocket, RabbitMQ, Chatwoot y Typebot se pueden configurar después de crear la instancia.",
    integration: "Integración",
    number: "Identificador de número de teléfono",
  },
  contribute: {
    title: "Contribuir",
    via: "Contribuir a través de",
    button: "Contribuir",
  },
  connection: {
    title: "Configurar conexión",
    action: "Conectar",
    saved: "Conexión guardada | Conexiones guardadas",
  },
  instanceTabs: {
    settings: "Ajustes",
    message: "Mensajes",
    profile: "Perfil",
  },
  connectPhone: {
    title: "Teléfono no conectado",
    apiGenericError: "No se pudo cargar el código QR. Si el error persiste, reinicie la API y vuelva a intentarlo..",
    qr: "QR Code",
    code: "Código",
  },
  options: {
    title: "Comportamiento",
    rejectCall: "Rechazar Llamadas",
    msgCall: "Mensaje de rechazo",
    groupsIgnore: "Ignorar Grupos",
    alwaysOnline: "Siempre en línea",
    readMessages: "Marcar mensajes como leídos",
    readStatus: "Marcar estado de lectura",
    syncfullhistory: "Sincronizar el historial completo",
  },
  webhook: {
    byEvents: "Webhook por eventos",
    byEventsHelp: "Agrega nombre del evento al final de la URL. (ex: /webhook/event_name )",
  },
  rabbitmq: {
    info: "La API utiliza RabbitMQ para poner en cola las notificaciones. NO se utiliza para enviar mensajes.."
  },
  chatwoot: {
    account_id: "ID de Cuenta",
    token: "Token de Cuenta",
    dayslimitimportmessages: "Límite de días para importar mensajes",
    nameInbox: "Nombre de la bandeja de entrada",
    nameInboxHelp: "Nombre de la bandeja de entrada que se utilizará en Chatwoot. Si no se proporciona, será el nombre de la sesión por defecto.",
    signMsg: "Firmar en mensajes",
    signMsgHelp: "Agrega el nombre del agente en la primera línea del mensaje.",
    signDelimiter: "Delimitador de firma",
    signDelimiterHelp: "Delimitador utilizado para separar la firma del mensaje (\\n para salto de línea)",
    reopenConversation: "Reabrir conversación",
    reopenConversationHelp: "Vuelve a abrir la conversación del cliente cuando inicia una nueva conversación en lugar de crear una nueva conversación.",
    conversationPending: "Iniciar conversación en estado pendiente",
    conversationPendingHelp: "Inicia la conversación como pendiente en lugar de abierta",
    autoCreate: "Crear bandeja de entrada",
    autoCreateHelp: "Crea la bandeja de entrada en Chatwoot si no existe",
    mergeBrasilianContacts: "Unir contactos brasileños",
    mergeBrasilianContactsHelp: "Si hay dos contactos con el mismo número, uno con el dígito nueve y otro sin él, se fusionarán; válido únicamente para números brasileños.",
    importcontacts: "Importar contactos",
    importcontactsHelp: "Importa contactos a Chatwoot",
    importmessages: "Importar mensajes",
    importmessagesHelp: "Importa mensajes historioco de mensajes a Chatwoot",
    config: {
      btn: "Cómo configurar Chatwoot?",
      title: "Cómo configurar la bandeja de entrada de Chatwoot?",
      fullDoc: "Ver documentación completa",
      steps: {
        "1": "Accede a configuración > Bandeja de entrada y haz clic en\"Add Inbox\"",
        "2": "Seleccionar \"API\" como el tipo de bandeja de entrada",
        "3": "Complete el nombre de la bandeja de entrada y el webhook. Los valores deben ser exactamente los siguientes:",
        "4": "Agregar agentes a la bandeja de entrada.",
        "5": "¡Hecho! Ahora puedes recibir mensajes.",
      }
    }
  },
  typebot: {
    typebot: "Nombre del flujo de Typebot",
    typebotHelp: "El nombre del flujo de Typebot que se utilizará.",
    keywordFinish: "Palabra clave Finalizar",
    keywordFinishHelp: "Palabra clave para finalizar el flujo",
    expire: "Tiempo de vencimiento (en minutos)",
    expireHelp: "Hora de finalizar la sesión si no hay interacción",
    delayMessage: "Tiempo de escritura de mensajes",
    delayMessageUnit: "en milisegundos",
    delayMessageHelp: "Tiempo de simulación de escritura",
    unknownMessage: "Mensaje para Formato desconocido",
    unknownMessageHelp: "Mensaje enviado cuando no se reconoce el formato del mensaje",
    unknownMessagePlaceholder: "Dejar en blanco para no enviar mensaje",
    listeningFromMe: "Escuchar mensajes enviados por mi",
    listeningFromMeHelp: "Envía los mensajes enviados por usted al flujo de Typebot",
    session: {
      title: "Sesiones de Typebot",
      btn: "Ver 0 sesiones | Ver una sesión | Ver {count} sesiónes",
      noData: "No se encontraron sesiones",
      headers: {
        variable: "Variables",
        createdAt: "Empezó a las",
        updatedAt: "Ultimo mensaje",
      }
    },
    status: {
      opened: "Abierto",
      paused: "En pausa",
      closed: "Cerrado",
    }
  },
  sendMessage: {
    title: "Enviar mensaje",
    to: "A",
    noContacts: "Sin contactos",
    message: "Mensaje",
    presence: "Presence",
    delay: "Delay",
    delayHelp: "Retraso en milisegundos",
    send: "Enviar",
    success: "Mensaje enviado con éxito | Mensajes enviados exitosamente",
  },
  phoneHasWhatsApp: {
    title: "¿Tiene WhatsApp?",
    phone: "Número whatsapp",
    verify: "Verificar",
    exists: "WhatsApp found",
    notExists: "WhatsApp not found",
    invalid: "Número invalido",
  },
  contacts: {
    title: "Mis contactos",
  },
  groups: {
    title: "Mis grupos",
    headers: { creation: "Creado en", }
  },
  chats: {
    title: "Mis chats",
    headers: { lastMsgTimestamp: "Ultimo mensaje", }
  },
  profile: {
    title: "Nombre y estado",
    name: "Nombre",
    status: "Estado"
  },
  profilePicture: {
    title: "Foto de perfil",
    noPhoto: "Sin foto de perfil",
    upload: "Seleccione Foto",
    remove: "Quitar foto",
  },
  privacy: {
    title: "Privacidad",
    lastSeen: "Ultima vez visto",
    online: "Online",
    profilePhoto: "Foto de perfil",
    status: "Estado",
    readreceipts: "Leer recibos",
    groupadd: "Ser agregado a grupos",
    options: {
      all: "Todos",
      contacts: "Mis contactos",
      contactBlacklist: "Mis contactos, excepto los de la lista negra",
      matchLastSeen: "Partido visto por última vez",
      none: "Nadie",
    }
  }
}