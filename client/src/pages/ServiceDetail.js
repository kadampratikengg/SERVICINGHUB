import React from 'react';
import { useParams, Link } from 'react-router-dom';

import ApiDevelopment from './Services/ApiDevelopment';
import ApplianceRepair from './Services/ApplianceRepair';
import AutomationScripting from './Services/AutomationScripting';
import AzureCloudSetup from './Services/AzureCloudSetup';
import BackupSolutions from './Services/BackupSolutions';
import BatteryReplacement from './Services/BatteryReplacement';
import CctvInstallation from './Services/CctvInstallation';
import CloudflareSetup from './Services/CloudflareSetup';
import DesktopRepair from './Services/DesktopRepair';
import CiCdPipelineSetup from './Services/DevOpsAutomation';
import DigitalOceanVpsSetup from './Services/DigitalOceanVpsSetup';
import DnsDomainSetup from './Services/DnsDomainSetup';
import DockerContainerization from './Services/DockerContainerization';
import EcommerceDevelopment from './Services/EcommerceDevelopment';
import ElectricalWork from './Services/ElectricalWork';
import FirewallSetup from './Services/FirewallSetup';
import GcpCloudSetup from './Services/GcpCloudSetup';
import InfrastructureAsCode from './Services/InfrastructureAsCode';
import KubernetesDeployment from './Services/KubernetesDeployment';
import LaptopRepair from './Services/LaptopRepair';
import Microsoft365Setup from './Services/Microsoft365Setup';
import MobileAppDevelopment from './Services/MobileAppDevelopment';
import MonitoringAndAlerts from './Services/MonitoringAndAlerts';
import PlumbingServices from './Services/PlumbingServices';
import SoftwareDevelopment from './Services/SoftwareDevelopment';
import SslCertificateSetup from './Services/SslCertificateSetup';
import UiUxDesign from './Services/UiUxDesign';
import UpsInstallation from './Services/UpsInstallation';
import VulnerabilityScan from './Services/VulnerabilityScan';
import WebApplicationDevelopment from './Services/WebApplicationDevelopment';
import ZohoSetup from './Services/ZohoSetup';
import AWSCloudSetup from './Services/AWSCloudSetup';

const pageMap = {
  'software-development': SoftwareDevelopment,
  'web-application-development': WebApplicationDevelopment,
  'mobile-app-hybrid': MobileAppDevelopment,
  'api-development': ApiDevelopment,
  'ui-ux-design': UiUxDesign,
  'e-commerce-development': EcommerceDevelopment,
  'ci-cd-pipeline-setup': CiCdPipelineSetup,
  'docker-containerization': DockerContainerization,
  'kubernetes-deployment': KubernetesDeployment,
  'infrastructure-as-code': InfrastructureAsCode,
  'monitoring-and-alerts': MonitoringAndAlerts,
  'automation-scripting': AutomationScripting,
  'aws-cloud-setup': AWSCloudSetup,
  'azure-cloud-setup': AzureCloudSetup,
  'google-cloud-gcp': GcpCloudSetup,
  'digitalocean-vps-setup': DigitalOceanVpsSetup,
  'cloudflare-setup': CloudflareSetup,
  'zoho-setup-support': ZohoSetup,
  'microsoft-365-setup': Microsoft365Setup,
  'dns-domain-setup': DnsDomainSetup,
  'firewall-setup': FirewallSetup,
  'vulnerability-scan': VulnerabilityScan,
  'backup-solutions': BackupSolutions,
  'ssl-certificate-setup': SslCertificateSetup,
  'cctv-installation': CctvInstallation,
  'laptop-repair': LaptopRepair,
  'desktop-repair': DesktopRepair,
  'ups-installation': UpsInstallation,
  'battery-replacement': BatteryReplacement,
  'appliance-repair': ApplianceRepair,
  'electrical-work': ElectricalWork,
  'plumbing-services': PlumbingServices,
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const PageComponent = pageMap[slug];

  if (!PageComponent) {
    return (
      <main className='app-shell'>
        <div className='container section'>
          <div className='section-title text-center'>
            <h2>Service not found</h2>
            <p>The requested service page is not available.</p>
            <Link to='/services' className='btn btn-primary'>
              Back to Services
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <PageComponent />;
};

export default ServiceDetail;
