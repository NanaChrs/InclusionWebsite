# Chat backend

Créer un serveur HTTP (express) + Websocket (socket.io).

Pas d'authentification (l'utilisateur sera un guest sur le front, pas de persistence).

Le front décide du nom de l'utilisateur (il en génère un automatiquement ou laisse l'utilisateur le modifier).

## API

### HTTP

`GET /api/channels/`

Renvoie la liste des channels.

`Response body`
```js
[
  {
    id: 'channelId',
    name: 'name',
  }
]
```

---
`GET /api/channels/:channelId/`

Renvoie les informations du channel `channelId`.

`Response body`
```js
{
  id: 'channelId',
  name: 'name',
}
```

---
`GET /api/channels/:channelId/messages/`

Renvoie l'historique des message du channel `channelId`.

`Response body`
```js
[
  {
    _id: 'messageId',
    user: 'username',
    text: 'text',
    date: 'date ISO'
  }
]
```

---
`GET /api/channels/:channelId/messages/:messageId/`

Renvoie les informations du message `messageId` du channel `channelId`.

`Response body`
```js
{
  _id: 'messageId',
  user: 'username',
  text: 'text',
  date: 'date ISO'
}
```

---
`POST /api/channels/`

Crée un nouveau channel.

`Request body`
```js
{
  name: 'name'
}
```

---
`PATCH /api/channels/:channelId/`

Modifie le channel `channelId`.

`Request body`
```js
{
  name: 'name'
}
```

---
`POST /api/channels/:channelId/messages/`

Poste un message dans le channel `channelId`.

`Request body`
```js
{
  user: 'username',
  text: 'text'
}
```

---
PATCH /api/channels/:channelId/messages/:messageId/

Modifie le message `messageId` dans le channel `channelId`.

`Request body`
```js
{
  text: 'text'
}
```

---
`DELETE /api/channels/:channelId/`

Supprime le channel `channelId` et tous ses messages.

---
`DELETE /api/channels/:channelId/messages/:messageId/`

Supprime le message `messageId` channel `channelId`.

### Websocket

#### Serveur => Client

`channel:new`

Un nouveau channel a été créé.

`Body`
```js
{
  _id: 'channelId',
  name: 'name'
}
```

---
`channel:edit`

Un channel a été modifié.

`Body`
```js
{
  _id: 'channelId',
  name: 'name'
}
```

---
`channel:delete`

Un channel a été supprimé.

`Body`
```js
{
  _id: 'channelId'
}
```

---
`message:new`

Un message a été envoyé.

`Body`
```js
{
  channelId: 'channelId',
  messageId: 'messageId',
  user: 'username',
  text: 'text',
  date: 'date ISO'
}
```


---
`message:edit`

Un message a été modifié.

`Body`
```js
{
  channelId: 'channelId',
  messageId: 'messageId',
  user: 'username',
  text: 'text'
}
```

---
`message:delete`

Un message a été supprimé.

`Body`
```js
{
  channelId: 'channelId',
  messageId: 'messageId'
}
```
