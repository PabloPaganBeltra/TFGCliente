(this.webpackJsonpcliente=this.webpackJsonpcliente||[]).push([[0],{42:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(16),c=a.n(n),o=(a(42),a(15)),s=a(5),i=a(13),l=a(2),u=a(6),b=Object(r.createContext)(),j=Object(r.createContext)(),p=a(0),d=function(e){var t=Object(r.useContext)(b),a=t.alerta,n=t.mostrarAlerta,c=Object(r.useContext)(j),s=c.mensaje,d=c.autenticado,m=c.iniciarSesion;Object(r.useEffect)((function(){d&&e.history.push("/proyectos"),s&&n(s.msg,s.categoria)}),[s,d,e.history]);var O=Object(r.useState)({email:"",password:""}),f=Object(u.a)(O,2),h=f[0],x=f[1],y=h.email,v=h.password,g=function(e){x(Object(l.a)(Object(l.a)({},h),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("div",{className:"form-usuario",children:[a?Object(p.jsx)("div",{className:"alerta ".concat(a.categoria),children:a.msg}):null,Object(p.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(p.jsx)("h1",{children:"Iniciar Sesion"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()||n("Todos los campos son oblitagorios","alerta-error"),m({email:y,password:v})},children:[Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email "}),Object(p.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Correo electr\xf3nico",value:y,onChange:g})]}),Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Escribe tu contrase\xf1a",value:v,onChange:g})]}),Object(p.jsx)("div",{className:"campo form",children:Object(p.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Iniciar Sesion"})})]}),Object(p.jsx)(o.b,{to:"/nueva-cuenta",className:"enlace-cuenta",children:"Obtener cuenta"})]})]})},m=function(e){var t=Object(r.useContext)(b),a=t.alerta,n=t.mostrarAlerta,c=Object(r.useContext)(j),s=c.mensaje,d=c.autenticado,m=c.registrarUsuario;Object(r.useEffect)((function(){d&&e.history.push("/proyectos"),s&&n(s.msg,s.categoria)}),[s,d,e.history]);var O=Object(r.useState)({nombre:"",email:"",password:"",confirmar:""}),f=Object(u.a)(O,2),h=f[0],x=f[1],y=h.nombre,v=h.email,g=h.password,N=h.confirmar,C=function(e){x(Object(l.a)(Object(l.a)({},h),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(p.jsxs)("div",{className:"form-usuario",children:[a?Object(p.jsx)("div",{className:"alerta ".concat(a.categoria),children:a.msg}):null,Object(p.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(p.jsx)("h1",{children:"Crear Cuenta"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()&&""!==g.trim()&&""!==N.trim()?g.length<6?n("La contrase\xf1a debe tener por lo menos 6 car\xe1cteres","alerta-error"):g===N?m({nombre:y,email:v,password:g}):n("Las contrase\xf1as deben ser iguales","alerta-error"):n("Todos los campos son obligatorios","alerta-error")},children:[Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"nombre",children:"Nombre "}),Object(p.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Nombre de usuario",value:y,onChange:C})]}),Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email "}),Object(p.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Correo electr\xf3nico",value:v,onChange:C})]}),Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Escribe tu contrase\xf1a",value:g,onChange:C})]}),Object(p.jsxs)("div",{className:"campo-form",children:[Object(p.jsx)("label",{htmlFor:"confirmar",children:"Confirmar Password"}),Object(p.jsx)("input",{type:"password",id:"confirmar",name:"confirmar",placeholder:"Confirmaci\xf3n de contrase\xf1a",value:N,onChange:C})]}),Object(p.jsx)("div",{className:"campo form",children:Object(p.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Registrarme"})})]}),Object(p.jsx)(o.b,{to:"/",className:"enlace-cuenta",children:"Volver a Iniciar Sesion"})]})]})},O=Object(r.createContext)(),f=function(){var e=Object(r.useContext)(O),t=e.formulario,a=e.errorformulario,n=e.mostrarFormulario,c=e.agregarProyecto,o=e.mostrarError,s=Object(r.useState)({nombre:""}),b=Object(u.a)(s,2),j=b[0],d=b[1],m=j.nombre;return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)("button",{type:"button",className:"btn btn-block btn-primario",onClick:function(){return n()},children:"Nuevo Proyecto"}),t?Object(p.jsxs)("form",{className:"formulario-nuevo-proyecto",onSubmit:function(e){e.preventDefault(),""!==m?(c(j),d({nombre:""})):o()},children:[Object(p.jsx)("input",{type:"text",className:"input-text",placeholder:"Nombre de Proyecto",name:"nombre",value:m,onChange:function(e){d(Object(l.a)(Object(l.a)({},j),{},Object(i.a)({},e.target.name,e.target.value)))}}),Object(p.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Agregar Proyecto"})]}):null,a?Object(p.jsx)("p",{className:"mensaje error",children:"El nombre del proyecto es obligatorio"}):null]})},h=Object(r.createContext)(),x=function(e){var t=e.proyecto,a=Object(r.useContext)(O).proyectoActual,n=Object(r.useContext)(h).obtenerTareas;return Object(p.jsx)("li",{children:Object(p.jsx)("button",{type:"button",className:"btn btn-blank btn-block",onClick:function(){return e=t._id,a(e),void n(e);var e},children:t.nombre})})},y=a(73),v=a(72),g=function(){var e=Object(r.useContext)(O),t=e.mensaje,a=e.proyectos,n=e.obtenerProyectos,c=Object(r.useContext)(b),o=c.alerta,s=c.mostrarAlerta;return Object(r.useEffect)((function(){t&&s(t.msg,t.categoria),n()}),[t]),0===a.length?Object(p.jsx)("p",{children:"No hay proyectos, comienza creando uno"}):Object(p.jsxs)("ul",{className:"listado-proyectos",children:[o?Object(p.jsx)("div",{className:"alerta ".concat(o.categoria),children:o.msg}):null,Object(p.jsx)(y.a,{children:a.map((function(e){return Object(p.jsx)(v.a,{timeout:200,classNames:"proyecto",children:Object(p.jsx)(x,{proyecto:e})},e._id)}))})]})},N=function(){return Object(p.jsxs)("aside",{children:[Object(p.jsxs)("h1",{children:["Organiza",Object(p.jsx)("span",{children:"Online"})]}),Object(p.jsx)(f,{}),Object(p.jsxs)("div",{className:"proyectos",children:[Object(p.jsx)("h2",{children:"Tus Proyectos"}),Object(p.jsx)(g,{})]})]})},C=function(){var e=Object(r.useContext)(j),t=e.usuario,a=e.usuarioAutenticado,n=e.cerrarSesion;return Object(r.useEffect)((function(){a()}),[]),Object(p.jsxs)("header",{className:"app-header",children:[t?Object(p.jsxs)("p",{className:"nombre-usuario",children:["Bienvenido ",Object(p.jsxs)("span",{children:[" ",t.nombre," "]})]}):null,Object(p.jsx)("nav",{className:"nav-principal",children:Object(p.jsx)("button",{className:"btn btn-blank cerrar-sesion",onClick:function(){return n()},children:"Cerrar Sesi\xf3n"})})]})},R=function(){var e=Object(r.useContext)(O).proyecto,t=Object(r.useContext)(h),a=t.tareaseleccionada,n=t.errortarea,c=t.agregarTarea,o=t.validarTarea,s=t.obtenerTareas,b=t.actualizarTarea;Object(r.useEffect)((function(){f(null!==a?a:{nombre:""})}),[a]);var j=Object(r.useState)({nombre:""}),d=Object(u.a)(j,2),m=d[0],f=d[1],x=m.nombre;if(!e)return null;var y=Object(u.a)(e,1)[0];return Object(p.jsxs)("div",{className:"formulario",children:[Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==x.trim()?(null===a?(m.proyecto=y._id,c(m)):b(m),s(y._id),f({nombre:""})):o()},children:[Object(p.jsx)("div",{className:"contenedor-input",children:Object(p.jsx)("input",{type:"text",className:"input-text",placeholder:"nombre tarea...",name:"nombre",value:x,onChange:function(e){f(Object(l.a)(Object(l.a)({},m),{},Object(i.a)({},e.target.name,e.target.value)))}})}),Object(p.jsx)("div",{className:"contenedor-input",children:Object(p.jsx)("input",{type:"submit",className:"btn btn-primario btn-submit btn-block",value:a?"Editar Tarea":"Agregar Tarea"})})]}),n?Object(p.jsx)("p",{className:"mensaje error",children:" El nombre de la tarea es obligatorio"}):null]})},k=function(e){var t=e.tarea,a=Object(r.useContext)(O).proyecto,n=Object(r.useContext)(h),c=n.eliminarTarea,o=n.obtenerTareas,s=n.actualizarTarea,i=n.guardarTareaActual,l=Object(u.a)(a,1)[0],b=function(e){e.estado?e.estado=!1:e.estado=!0,s(e)};return Object(p.jsxs)("li",{className:"tarea sombra",children:[Object(p.jsx)("p",{children:t.nombre}),Object(p.jsx)("div",{className:"estado",children:t.estado?Object(p.jsx)("button",{type:"button",className:"completo",onClick:function(){return b(t)},children:"Completo"}):Object(p.jsx)("button",{type:"button",className:"incompleto",onClick:function(){return b(t)},children:"Incompleto"})}),Object(p.jsxs)("div",{className:"acciones",children:[Object(p.jsx)("button",{type:"button",className:"btn btn-primario",onClick:function(){return function(e){i(e)}(t)},children:"Editar"}),Object(p.jsx)("button",{type:"button",className:"btn btn-secundario",onClick:function(){return e=t._id,c(e,l._id),void o(l._id);var e},children:"Eliminar"})]})]})},A=function(){var e=Object(r.useContext)(O),t=e.proyecto,a=e.eliminarProyecto,n=Object(r.useContext)(h).tareasproyecto;if(!t)return Object(p.jsx)("h2",{children:"Selecciona o crea un proyecto para comenzar"});var c=Object(u.a)(t,1)[0];return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsxs)("h2",{children:["Proyecto: ",c.nombre]}),Object(p.jsx)("ul",{className:"listado-tareas",children:0===n.length?Object(p.jsx)("li",{className:"tarea",children:Object(p.jsx)("p",{children:"no hay tareas"})}):Object(p.jsx)(y.a,{children:n.map((function(e,t){return Object(p.jsx)(v.a,{timeout:200,classNames:"tarea",children:Object(p.jsx)(k,{tarea:e},t)},t)}))})}),Object(p.jsx)("button",{type:"button",className:"btn btn-eliminar",onClick:function(){a(c._id)},children:"Eliminar Proyecto "})]})},E=function(){var e=Object(r.useContext)(j).usuarioAutenticado;return Object(r.useEffect)((function(){e()}),[]),Object(p.jsxs)("div",{className:"contenedor-app",children:[Object(p.jsx)(N,{}),Object(p.jsxs)("div",{className:"seccion-principal",children:[Object(p.jsx)(C,{}),Object(p.jsxs)("main",{children:[Object(p.jsx)(R,{}),Object(p.jsx)("div",{className:"contenedor-tareas",children:Object(p.jsx)(A,{})})]})]})]})},T=a(4),w=a.n(T),_=a(11),S=a(20),I="FORMULARIO_PROYECTO",P="OBTENER_PROYECTOS",L="AGREGAR_PROYECTO",F="VALIDAR_FORMULARIO",U="PROYECTO_ACTUAL",G="ELIMINAR_PROYECTO",D="PROYECTO_ERROR",Y="TAREAS_PROYECTO",z="AGREGAR_TAREA",B="VALIDAR_TAREA",M="ELIMINAR_TAREA",H="TAREA_ACTUAL",V="ACTUALIZAR_TAREA",J="MOSTRAR_ALERTA",X="OCULTAR_ALERTA",Z="REGISTRO_EXITOSO",q="REGISTRO_ERROR",K="OBTENER_USUARIO",Q="LOGIN_EXITOSO",W="LOGIN_ERROR",$="CERRAR_SESION",ee=function(e,t){switch(t.type){case I:return Object(l.a)(Object(l.a)({},e),{},{formulario:!0});case P:return Object(l.a)(Object(l.a)({},e),{},{proyectos:t.payload});case L:return Object(l.a)(Object(l.a)({},e),{},{proyectos:[].concat(Object(S.a)(e.proyectos),[t.payload]),formulario:!1,errorformulario:!1});case F:return Object(l.a)(Object(l.a)({},e),{},{errorformulario:!0});case U:return Object(l.a)(Object(l.a)({},e),{},{proyecto:e.proyectos.filter((function(e){return e._id===t.payload}))});case G:return Object(l.a)(Object(l.a)({},e),{},{proyectos:e.proyectos.filter((function(e){return e._id!==t.payload})),proyecto:null});case D:return Object(l.a)(Object(l.a)({},e),{},{mensaje:t.payload});default:return e}},te=a(34),ae=a.n(te).a.create({baseURL:"https://tfgservidor.herokuapp.com/"}),re=function(e){var t=Object(r.useReducer)(ee,{proyectos:[],formulario:!1,errorformulario:!1,proyecto:null,mensaje:null}),a=Object(u.a)(t,2),n=a[0],c=a[1],o=function(){var e=Object(_.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.get("/api/proyectos");case 3:t=e.sent,c({type:P,payload:t.data.proyectos}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),c({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(_.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.post("/api/proyectos",t);case 3:a=e.sent,console.log(a),c({type:L,payload:a.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(_.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.delete("/api/proyectos/".concat(t));case 3:c({type:G,payload:t}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),c({type:D,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(O.Provider,{value:{proyectos:n.proyectos,formulario:n.formulario,errorformulario:n.errorformulario,proyecto:n.proyecto,mensaje:n.mensaje,mostrarFormulario:function(){c({type:I})},obtenerProyectos:o,agregarProyecto:s,mostrarError:function(){c({type:F})},proyectoActual:function(e){c({type:U,payload:e})},eliminarProyecto:i},children:e.children})},ne=function(e,t){switch(t.type){case Y:return Object(l.a)(Object(l.a)({},e),{},{tareasproyecto:t.payload});case z:return Object(l.a)(Object(l.a)({},e),{},{tareasproyecto:[t.payload].concat(Object(S.a)(e.tareasproyecto)),errortarea:!1});case B:return Object(l.a)(Object(l.a)({},e),{},{errortarea:!0});case M:return Object(l.a)(Object(l.a)({},e),{},{tareasproyecto:e.tareasproyecto.filter((function(e){return e._id!==t.payload}))});case H:return Object(l.a)(Object(l.a)({},e),{},{tareaseleccionada:t.payload});case V:return Object(l.a)(Object(l.a)({},e),{},{tareasproyecto:e.tareasproyecto.map((function(e){return e._id===t.payload._id?t.payload:e})),tareaseleccionada:null});default:return e}},ce=function(e){var t=Object(r.useReducer)(ne,{tareasproyecto:[],errortarea:!1,tareaseleccionada:null}),a=Object(u.a)(t,2),n=a[0],c=a[1],o=function(){var e=Object(_.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.get("/api/tareas",{params:{proyecto:t}});case 3:a=e.sent,c({type:Y,payload:a.data.tareas}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(_.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.post("/api/tareas",t);case 3:a=e.sent,c({type:z,payload:a.data.tarea}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(_.a)(w.a.mark((function e(t,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.delete("/api/tareas/".concat(t),{params:{proyecto:a}});case 3:c({type:M,payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(_.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.put("/api/tareas/".concat(t._id),t);case 3:a=e.sent,c({type:V,payload:a.data.tarea}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(h.Provider,{value:{tareasproyecto:n.tareasproyecto,errortarea:n.errortarea,tareaseleccionada:n.tareaseleccionada,obtenerTareas:o,agregarTarea:s,validarTarea:function(){c({type:B})},eliminarTarea:i,guardarTareaActual:function(e){c({type:H,payload:e})},actualizarTarea:l},children:e.children})},oe=function(e,t){switch(t.type){case J:return{alerta:t.payload};case X:return{alerta:null};default:return e}},se=function(e){var t=Object(r.useReducer)(oe,{alerta:null}),a=Object(u.a)(t,2),n=a[0],c=a[1];return Object(p.jsx)(b.Provider,{value:{alerta:n.alerta,mostrarAlerta:function(e,t){c({type:J,payload:{msg:e,categoria:t}}),setTimeout((function(){c({type:X})}),5e3)}},children:e.children})},ie=function(e,t){switch(t.type){case Q:case Z:return localStorage.setItem("token",t.payload.token),Object(l.a)(Object(l.a)({},e),{},{autenticado:!0,mensaje:null,cargando:!1});case K:return Object(l.a)(Object(l.a)({},e),{},{usuario:t.payload,autenticado:!0,cargando:!1});case $:case W:case q:return localStorage.removeItem("token"),Object(l.a)(Object(l.a)({},e),{},{usuario:null,autenticado:null,token:null,mensaje:t.payload,cargando:!1});default:return e}},le=function(e){e?ae.defaults.headers.common["x-auth-token"]=e:delete ae.defaults.headers.common["x-auth-token"]},ue=function(e){var t={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},a=Object(r.useReducer)(ie,t),n=Object(u.a)(a,2),c=n[0],o=n[1],s=function(){var e=Object(_.a)(w.a.mark((function e(t){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.post("/api/usuarios",t);case 3:a=e.sent,o({type:Z,payload:a.data}),i(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},o({type:q,payload:r});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(_.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("token"))&&le(t),e.prev=2,e.next=5,ae.get("/api/auth");case 5:a=e.sent,o({type:K,payload:a.data.usuario}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),o({type:W});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(_.a)(w.a.mark((function e(t){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.post("/api/auth",t);case 3:a=e.sent,console.log(a),o({type:Q,payload:a.data}),i(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data.msg),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},o({type:q,payload:r});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(j.Provider,{value:{token:c.token,autenticado:c.autenticado,usuario:c.usuario,mensaje:c.mensaje,cargando:c.cargando,registrarUsuario:s,iniciarSesion:l,usuarioAutenticado:i,cerrarSesion:function(){o({type:$})}},children:e.children})},be=a(35),je=["component"],pe=function(e){var t=e.component,a=Object(be.a)(e,je),n=Object(r.useContext)(j),c=n.autenticado,o=n.cargando,i=n.usuarioAutenticado;return Object(r.useEffect)((function(){i()}),[]),Object(p.jsx)(s.b,Object(l.a)(Object(l.a)({},a),{},{render:function(e){return c||o?Object(p.jsx)(t,Object(l.a)({},e)):Object(p.jsx)(s.a,{to:"/"})}}))},de=localStorage.getItem("token");de&&le(de);var me=function(){return Object(p.jsx)(re,{children:Object(p.jsx)(ce,{children:Object(p.jsx)(se,{children:Object(p.jsx)(ue,{children:Object(p.jsx)(o.a,{children:Object(p.jsxs)(s.d,{children:[Object(p.jsx)(s.b,{exact:!0,path:"/",component:d}),Object(p.jsx)(s.b,{exact:!0,path:"/nueva-cuenta",component:m}),Object(p.jsx)(pe,{exact:!0,path:"/proyectos",component:E})]})})})})})})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};c.a.render(Object(p.jsx)(me,{}),document.getElementById("root")),Oe()}},[[71,1,2]]]);
//# sourceMappingURL=main.fb352ea3.chunk.js.map