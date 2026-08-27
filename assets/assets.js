import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import azure from './azure.png';
import visualstudio from './visualstudio.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    azure,
    visualstudio,    
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'EasyShopper — .NET 10 Microservices Modernization',
        description: 'Modernized an 18-project event-driven solution to .NET 10, then added Docker Compose, CI quality gates, and dependency vulnerability scanning.',
        tags: ['.NET 10', 'MassTransit', 'RabbitMQ', 'Docker', 'GitHub Actions'],
        repository: 'https://github.com/kemalyasintha/EasyShopper',
    },
    {
        title: 'Northstar Housing — Angular 22 Marketplace',
        description: 'Modernized a legacy Angular property application with standalone components, typed forms, reactive filtering, API workflows, and automated tests.',
        tags: ['Angular 22', 'TypeScript', 'RxJS', 'REST APIs', 'Vitest'],
        repository: 'https://github.com/kemalyasintha/housing_application1',
    },
    {
        title: 'Azure Incident Remediation Automation Lab',
        description: 'Automated Azure incident remediation with Ansible, Application Gateway, Key Vault, and certificate lifecycle automation.',
        tags: ['Azure', 'Ansible', 'Key Vault', 'Application Gateway'],
        repository: 'https://github.com/kemalyasintha/azure-ansible-incident-remediation',
    },
    {
        title: 'QualityGateLab — Continuous Testing Pipeline',
        description: 'A .NET quality-gate project covering xUnit, integration testing, EF Core, GitHub pull requests, and Azure DevOps CI.',
        tags: ['C#', 'xUnit', 'EF Core', 'Azure DevOps', 'CI/CD'],
        repository: 'https://github.com/kemalyasintha/qualitygatelab-continuous-testing',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: '.NET & API Development', description: 'C#, ASP.NET Core, REST APIs, system integration, and secure application design.' },
    { icon: assets.azure, title: 'Azure & CI/CD Delivery', description: 'Azure App Service, Functions, Key Vault, Entra ID, Azure DevOps, and GitHub Actions.' },
    { icon: assets.code_icon, title: 'SaaS & Legacy Modernization', description: 'Incremental modernization of business-critical applications while protecting reliability and delivery.' },
    { icon: assets.git, title: 'Quality & Production Support', description: 'Automated testing, troubleshooting, root-cause analysis, release readiness, and operational ownership.' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Core stack', description: 'C#, .NET, ASP.NET Core, SQL, REST APIs, TypeScript, Angular' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Cloud delivery', description: 'Azure, Docker, Azure DevOps, GitHub Actions, CI/CD, automated testing' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Experience', description: '9+ years in enterprise applications, SaaS modernization, and production support' }
];

export const toolsData = [
    assets.vscode, assets.visualstudio, assets.mongodb, assets.azure, assets.git
];
