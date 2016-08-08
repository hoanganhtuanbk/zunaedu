import React from 'react';
import {render} from 'react-dom';

export class DeveloperPage extends React.Component{
  render(){
    return (
      <div className="container">
        <section className="section	">
          <div >
            <h1>Javascript SDK</h1>
            <ol>
              <li>
                <h3>You must include pubsub javascribe sdk to your code before initializing the client</h3>
                <td class="code">
                  <div class="container">
                    <div class="line number1 index0 alt2"><code class="jscript plain">&lt;html&gt;</code></div>
                    <div class="line number2 index1 alt1"><code class="jscript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="jscript plain">&lt;body&gt;</code></div>
                    <div class="line number3 index2 alt2"><code class="jscript spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="jscript plain">&lt;script src=</code><code class="jscript string">"<a href="http://localhost:3000/pubsub-api.js">http://localhost:3000/pubsub-api.js</a>"</code><code class="jscript plain">&gt;&lt;/script&gt;</code></div>
                    <div class="line number4 index3 alt1"><code class="jscript spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="jscript plain">&lt;/body&gt;</code></div><div class="line number5 index4 alt2"><code class="jscript plain">&lt;/html&gt;</code></div>
                  </div>
                </td>
              </li>
              <li>
                <h3>Init</h3>
                <div class="container">
                  <code>var pubsub = pubsub-api()</code><br></br>
                  <code>var client = pubsub.connect(YOUR-APP-ID, YOUR-CLIENT-SECRET);</code>
                </div>
              </li>
              <li>
                <h3>Publish</h3>
                <div class="container">
                  <code>
                    client.publish(TOPIC, MESSAGE, [OPTIONS], [CALLBACK]);
                  </code>
                  <ul>
                    <li>
                      TOPIC is the topic that you want to pulish to, STRING
                    </li>
                    <li>
                      MESSAGE is the message you want to publish
                    </li>
                    <li>
                      OPTIONS
                      <ul>
                        <li>
                          qos: QoS level, number, default is 0
                        </li>
                        <li>
                          retain: Retain flag, boolean, default is false
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <h3>SUBSCRIBE</h3>
                <code>  client.subscribe(TOPIC, [OPTIONS], [CALLBACK])
                </code>
                <ul>
                  <li>
                    TOPIC is the topic that you want to pulish to, STRING
                  </li>
                  <li>
                    MESSAGE is the message you want to publish
                  </li>
                  <li>
                    OPTIONS
                    <ul>
                      <li>
                        qos: QoS level, number, default is 0
                      </li>
                    </ul>
                  </li>
                  <li>
                    CALLBACK - function(err, granted)
                    <ul>
                      granted : is an array of (topic, qos) where:
                      <li>
                        topic is the subscribe that you subscribed to
                      </li>
                      <li>
                        qos is the granted  qos level on it
                      </li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li>
                <h3>Unsubscribe</h3>
                <div class="container">
                  <code>
                    client.unsubscribe(TOPIC, [CALLBACK])
                  </code>
                </div>
              </li>
              <li>
                <h3>END</h3>
                <div class="container">
                  <code>
                    client.end([FORCE], [cb])
                  </code>
                  <h4>Close the connection to the broker server</h4>
                  <ul>
                    <li>
                      FORCE: boolean
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <h3>To receive message</h3>
                <div className="container">
                  <code>
                    client.on('message', [CALLBACK]);
                  </code>
                </div>
                CALLBACK - function(topic, message, packet) {}
                <ul>
                  <li>
                    topic: topic of the received packet
                  </li>
                  <li>
                    message: payload of the received packet
                  </li>
                  <li>
                    packet: received packet
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div>
            <h1>Node SDK</h1>
            <ol>
              <li>
                <h3>Installing the code </h3>
                <div class="container">
                  <code>npm install paas-pubsub-sdk</code>
                </div>
              </li>
              <li>
                <h3>Init</h3>
                <div class="container">
                  <code>
                    var client = require("paas-pubsub-sdk")(&#123;
                  </code>
                  <br></br>
                  <code>&nbsp;clientId: YOUR-APP-ID,</code>
                  <br></br>
                  <code>&nbsp;clientSecret: YOUR-CLIENT-SECRET</code>
                  <br></br>
                  <code>&#125;, PAAS-WS-SERVER);</code>
                </div>
                <br></br>
                <p><b>PAAS-WS-SERVER</b> is the ws address of PAAS ws server, that is ws://PAAS-ADDRESS</p>
              </li>
              <li>
                <h3><b><i>The usage of node-skd and javascript-sdk are the same </i></b></h3>
              </li>
            </ol>
          </div>
        </section>
      </div>
    );
  }
};
