(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"2Ycm":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},K3UI:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { map, startWith, tap } <span class="hljs-keyword">from</span> <span class="hljs-string">\'rxjs/operators\'</span>;\n\n<span class="hljs-keyword">interface</span> Model {\n  readonly player: <span class="hljs-built_in">string</span>;\n  readonly sport: <span class="hljs-built_in">string</span>;\n  readonly team: <span class="hljs-built_in">string</span>;\n}\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: Partial&lt;Model&gt; = { sport: <span class="hljs-string">\'1\'</span> };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'sport\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Sport\'</span>,\n        options: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Soccer\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Basketball\'</span> },\n        ],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'team\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Team\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      hooks: {\n        onInit: <span class="hljs-function"><span class="hljs-params">field</span> =&gt;</span> {\n          <span class="hljs-keyword">const</span> teams = [\n            { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Real Madrid\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Cleveland\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n            { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Miami\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n          ];\n          <span class="hljs-keyword">const</span> sportControl = <span class="hljs-keyword">this</span>.form.get(<span class="hljs-string">\'sport\'</span>);\n          field.templateOptions.options = sportControl.valueChanges.pipe(\n            startWith(sportControl.value),\n            map(<span class="hljs-function"><span class="hljs-params">sportId</span> =&gt;</span> teams.filter(<span class="hljs-function"><span class="hljs-params">team</span> =&gt;</span> team.sportId === sportId)),\n            tap(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> field.formControl.setValue(<span class="hljs-literal">null</span>)),\n          );\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'player\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Player\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      hooks: {\n        onInit: <span class="hljs-function"><span class="hljs-params">field</span> =&gt;</span> {\n          <span class="hljs-keyword">const</span> players = [\n            { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 1)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 2)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n            { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 1)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n            { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 2)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n            { id: <span class="hljs-string">\'5\'</span>, name: <span class="hljs-string">\'Cleveland (Player 1)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n            { id: <span class="hljs-string">\'6\'</span>, name: <span class="hljs-string">\'Cleveland (Player 2)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n            { id: <span class="hljs-string">\'7\'</span>, name: <span class="hljs-string">\'Miami (Player 1)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n            { id: <span class="hljs-string">\'8\'</span>, name: <span class="hljs-string">\'Miami (Player 2)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n          ];\n          <span class="hljs-keyword">const</span> teamControl = <span class="hljs-keyword">this</span>.form.get(<span class="hljs-string">\'team\'</span>);\n          field.templateOptions.options = teamControl.valueChanges.pipe(\n            startWith(teamControl.value),\n            map(<span class="hljs-function"><span class="hljs-params">teamId</span> =&gt;</span> players.filter(<span class="hljs-function"><span class="hljs-params">player</span> =&gt;</span> player.teamId === teamId)),\n            tap(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> field.formControl.setValue(<span class="hljs-literal">null</span>)),\n          );\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},XmLa:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},gzZu:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary" [disabled]="!form.valid">Submit</button>\n</form>\n'},n8kb:function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFieldConfig } from '@ngx-formly/core';\nimport { map, startWith, tap } from 'rxjs/operators';\n\ninterface Model {\n  readonly player: string;\n  readonly sport: string;\n  readonly team: string;\n}\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: Partial<Model> = { sport: '1' };\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'sport',\n      type: 'select',\n      templateOptions: {\n        label: 'Sport',\n        options: [\n          { id: '1', name: 'Soccer' },\n          { id: '2', name: 'Basketball' },\n        ],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n    },\n    {\n      key: 'team',\n      type: 'select',\n      templateOptions: {\n        label: 'Team',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      hooks: {\n        onInit: field => {\n          const teams = [\n            { id: '1', name: 'Bayern Munich', sportId: '1' },\n            { id: '2', name: 'Real Madrid', sportId: '1' },\n            { id: '3', name: 'Cleveland', sportId: '2' },\n            { id: '4', name: 'Miami', sportId: '2' },\n          ];\n          const sportControl = this.form.get('sport');\n          field.templateOptions.options = sportControl.valueChanges.pipe(\n            startWith(sportControl.value),\n            map(sportId => teams.filter(team => team.sportId === sportId)),\n            tap(() => field.formControl.setValue(null)),\n          );\n        },\n      },\n    },\n    {\n      key: 'player',\n      type: 'select',\n      templateOptions: {\n        label: 'Player',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      hooks: {\n        onInit: field => {\n          const players = [\n            { id: '1', name: 'Bayern Munich (Player 1)', teamId: '1' },\n            { id: '2', name: 'Bayern Munich (Player 2)', teamId: '1' },\n            { id: '3', name: 'Real Madrid (Player 1)', teamId: '2' },\n            { id: '4', name: 'Real Madrid (Player 2)', teamId: '2' },\n            { id: '5', name: 'Cleveland (Player 1)', teamId: '3' },\n            { id: '6', name: 'Cleveland (Player 2)', teamId: '3' },\n            { id: '7', name: 'Miami (Player 1)', teamId: '4' },\n            { id: '8', name: 'Miami (Player 2)', teamId: '4' },\n          ];\n          const teamControl = this.form.get('team');\n          field.templateOptions.options = teamControl.valueChanges.pipe(\n            startWith(teamControl.value),\n            map(teamId => players.filter(player => player.teamId === teamId)),\n            tap(() => field.formControl.setValue(null)),\n          );\n        },\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},poKV:function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),e=a("gIcY"),p=a("p0Sj"),t=a("67Y/"),o=a("xMyE"),r=function(){function n(){var n=this;this.form=new e.FormGroup({}),this.model={sport:"1"},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}],valueProp:"id",labelProp:"name"}},{key:"team",type:"select",templateOptions:{label:"Team",options:[],valueProp:"id",labelProp:"name"},hooks:{onInit:function(s){var a=[{id:"1",name:"Bayern Munich",sportId:"1"},{id:"2",name:"Real Madrid",sportId:"1"},{id:"3",name:"Cleveland",sportId:"2"},{id:"4",name:"Miami",sportId:"2"}],l=n.form.get("sport");s.templateOptions.options=l.valueChanges.pipe(Object(p.a)(l.value),Object(t.a)(function(n){return a.filter(function(s){return s.sportId===n})}),Object(o.a)(function(){return s.formControl.setValue(null)}))}}},{key:"player",type:"select",templateOptions:{label:"Player",options:[],valueProp:"id",labelProp:"name"},hooks:{onInit:function(s){var a=[{id:"1",name:"Bayern Munich (Player 1)",teamId:"1"},{id:"2",name:"Bayern Munich (Player 2)",teamId:"1"},{id:"3",name:"Real Madrid (Player 1)",teamId:"2"},{id:"4",name:"Real Madrid (Player 2)",teamId:"2"},{id:"5",name:"Cleveland (Player 1)",teamId:"3"},{id:"6",name:"Cleveland (Player 2)",teamId:"3"},{id:"7",name:"Miami (Player 1)",teamId:"4"},{id:"8",name:"Miami (Player 2)",teamId:"4"}],l=n.form.get("team");s.templateOptions.options=l.valueChanges.pipe(Object(p.a)(l.value),Object(t.a)(function(n){return a.filter(function(s){return s.teamId===n})}),Object(o.a)(function(){return s.formControl.setValue(null)}))}}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),m={examples:[{title:"Cascaded Select (using observable)",description:"",component:r,files:[{file:"app.component.html",content:a("XmLa"),filecontent:a("gzZu")},{file:"app.component.ts",content:a("K3UI"),filecontent:a("n8kb")},{file:"app.module.ts",content:a("2Ycm"),filecontent:a("zrqq")}]}]},i=function(){return function(){}}(),c=a("NcP4"),d=a("AcC/"),u=a("htty"),h=a("LgGJ"),g=a("MT1c"),f=a("1Q/V"),j=a("9+aI"),y=a("haId"),b=a("LJsP"),C=a("yR2A"),v=a("UFMs"),k=a("pMnS"),I=a("4o01"),M=a("Dl9q"),w=a("UcnZ"),P=a("DAbo"),F=a("9Glx"),x=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var e=!0,p=n.component;return"submit"===s&&(e=!1!==l["\u0275nov"](n,2).onSubmit(a)&&e),"reset"===s&&(e=!1!==l["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==p.submit()&&e),e},null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,M.b,M.a)),l["\u0275prd"](512,null,w.a,w.a,[P.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,F.a,[w.a,P.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,7,0,a.form,a.model,a.fields)},function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,8,0,!a.form.valid)})}function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,x)),l["\u0275did"](1,49152,null,0,r,[],null,null)],null,null)}var R=l["\u0275ccf"]("formly-app-example",r,_,{},{},[]),O=a("Ip0R"),B=a("M2Lx"),G=a("eDkP"),N=a("Fzqc"),A=a("v9Dh"),L=a("ZYjt"),V=a("Wf4p"),D=a("mVsa"),W=a("6LlJ"),q=a("F6kA"),U=a("dWZg"),J=a("lLAP"),Y=a("4c35"),Z=a("qAlS"),z=a("La40"),T=a("SMsm"),E=a("UodH"),K=a("5QwG"),Q=a("qkla"),X=a("iZhS"),H=a("me7w"),$=a("N3PW"),nn=a("l4pn"),sn=a("Fv2i"),an=a("wBYW"),ln=a("IE48"),en=a("Q4Tx"),pn=a("XR12"),tn=a("Nsh5"),on=a("8mMr"),rn=a("mqvi"),mn=a("lYui"),cn=a("VGFS"),dn=a("1ey0"),un=function(){return function(){}}(),hn=a("ZYCi"),gn=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return fn});var fn=l["\u0275cmf"](i,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,d.a,u.a,h.a,g.a,f.a,j.a,y.a,b.a,C.a,v.a,k.a,I.a,R]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[l.LOCALE_ID,[2,O["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,B.c,B.c,[]),l["\u0275mpd"](4608,G.c,G.c,[G.i,G.e,l.ComponentFactoryResolver,G.h,G.f,l.Injector,l.NgZone,O.DOCUMENT,N.b,[2,O.Location]]),l["\u0275mpd"](5120,G.j,G.k,[G.c]),l["\u0275mpd"](5120,A.b,A.c,[G.c]),l["\u0275mpd"](4608,L.f,V.c,[[2,V.g],[2,V.l]]),l["\u0275mpd"](5120,D.b,D.g,[G.c]),l["\u0275mpd"](4608,W.a,W.a,[]),l["\u0275mpd"](4608,q.a,q.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,w.a,w.a,[P.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,O.CommonModule,O.CommonModule,[]),l["\u0275mpd"](1073742336,U.b,U.b,[]),l["\u0275mpd"](1073742336,B.d,B.d,[]),l["\u0275mpd"](1073742336,J.a,J.a,[]),l["\u0275mpd"](1073742336,N.a,N.a,[]),l["\u0275mpd"](1073742336,Y.g,Y.g,[]),l["\u0275mpd"](1073742336,Z.ScrollingModule,Z.ScrollingModule,[]),l["\u0275mpd"](1073742336,G.g,G.g,[]),l["\u0275mpd"](1073742336,V.l,V.l,[[2,V.d],[2,L.g]]),l["\u0275mpd"](1073742336,A.e,A.e,[]),l["\u0275mpd"](1073742336,V.v,V.v,[]),l["\u0275mpd"](1073742336,z.j,z.j,[]),l["\u0275mpd"](1073742336,D.e,D.e,[]),l["\u0275mpd"](1073742336,T.c,T.c,[]),l["\u0275mpd"](1073742336,E.c,E.c,[]),l["\u0275mpd"](1073742336,K.b,K.b,[]),l["\u0275mpd"](512,P.b,P.b,[]),l["\u0275mpd"](1024,P.a,function(n){return[{wrappers:[{name:"addons",component:Q.a}],extensions:[{name:"addons",extension:{postPopulate:X.a}}]},{types:[{name:"input",component:H.a,wrappers:["form-field"]},{name:"checkbox",component:$.a,wrappers:["form-field"]},{name:"radio",component:nn.a,wrappers:["form-field"]},{name:"select",component:sn.a,wrappers:["form-field"]},{name:"textarea",component:an.a,wrappers:["form-field"]},{name:"multicheckbox",component:ln.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:en.a}]},pn.b(n),{}]},[P.b]),l["\u0275mpd"](1073742336,pn.a,pn.a,[P.b,[2,P.a]]),l["\u0275mpd"](1073742336,tn.h,tn.h,[]),l["\u0275mpd"](1073742336,on.b,on.b,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,cn.a,cn.a,[]),l["\u0275mpd"](1073742336,dn.a,dn.a,[]),l["\u0275mpd"](1073742336,un,un,[]),l["\u0275mpd"](1073742336,hn.s,hn.s,[[2,hn.y],[2,hn.p]]),l["\u0275mpd"](1073742336,i,i,[]),l["\u0275mpd"](1024,hn.n,function(){return[[{path:"",component:gn.a,data:m}]]},[])])})},zrqq:function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"}}]);