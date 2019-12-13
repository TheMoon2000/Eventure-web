import React from 'react'
import './About.css'

export default function About() {
  document.title = "About Eventure"
  return (
    <div className="about">
      <div className="logoView">
        <img src="static/assets/logo.jpg" width="150px" alt="logo" />
      </div>
      <h1>Privacy Policy</h1>
      <p>Eventure (“us”, “we”, or “our”) operates the Eventure app (the “Service”). This Service is provided by Eventure at no cost and is intended for use as is.</p>
      <p>This page is used to inform visitors regarding our policies with the collection, use, and disclosure of personal data if anyone decided to use our Service. </p>
      <p>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The personal data that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
      <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Eventure unless otherwise defined in this Privacy Policy. </p>

      <h2 class="w3-large" align="left">Information Collection and Use</h2>
      <p>For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to Email, name, [pls insert all the other information you will collect from your users. Note: username is not included]. The information that we request will be retained by us and used as described in this Privacy Policy. </p>
      <p>The app does use third party services that may collect information used to identify you.</p>
      <p>Link to privacy policy of third party service providers used by the app: <a align="left" href="https://policies.google.com/privacy">Google Play Services</a></p>

      <h2 class="w3-large" align="left">Log Data</h2>
      <p>We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics. </p>

      <h2 class="w3-large" align="left">Cookies</h2>
      <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
      <p>This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>

      <h2 class="w3-large" align="left">Service Providers</h2>
      <p>We may employ third-party companies and individuals due to the following reasons:</p>
      <p>To facilitate our Service;<br />
         To provide and maintain the Service on our behalf;<br />
         To allow you to participate in interactive features of our Service when you choose to do so;<br />
         To provide customer care and support;<br />
         To provide analysis or valuable information so that we can improve the Service;<br />
         To monitor the usage of the Service;<br />
         To detect, prevent and address technical issues;<br />
         To perform Service-related services; or<br />
         To assist us in analyzing how our Service is used.</p>
      <p>We want to inform users of this Service that these third parties have access to your personal data. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

      <h2 class="w3-large" align="left">Security</h2>
      <p>We value your trust in providing us your personal data, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

      <h2 class="w3-large" align="left">Links to Other Sites</h2>
      <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

      <h2 class="w3-large" align="left">Children’s Privacy</h2>
      <p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal data, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us so that we will be able to do necessary actions.</p>

      <h2 class="w3-large" align="left">Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>

      <h2 class="w3-large" align="left">Contact Us</h2>
      <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at admin@eventure-app.com.</p>
      <p>This Privacy Policy is created with the help of the <a href="https://app-privacy-policy-generator.firebaseapp.com/">App Privacy Policy Generator</a>.</p>
    </div>
  )
}
