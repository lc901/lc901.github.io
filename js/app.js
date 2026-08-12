// ================================================================
// LC901 App Logic — v3 Refactor
// Keeps all translations intact, adds: mobile overlay, scroll reveals,
// spotlight borders, counter animations, nav scroll state.
// ================================================================

const translations = {
  en: {
    nav_home: 'Home', nav_courses: 'Courses', nav_about: 'About', nav_contact: 'Contact',
    hero_title: 'Master <span>Offensive</span> Security',
    hero_eyebrow: 'Live penetration testing training',
    hero_desc: 'Hands-on penetration testing courses designed for real-world engagement. Learn to hack, secure, and defend.',
    hero_btn_courses: 'View Courses', hero_btn_learn: 'Learn More',
    cta_title: 'Start Your Offensive Journey',
    cta_desc: 'Choose a course and begin hands-on training today.',
    courses_title: 'Popular Courses', courses_subtitle: 'Start your journey into offensive security',
    all_courses_title: 'All Courses', all_courses_subtitle: 'Choose your path into offensive security',
    filter_all: 'All',
    level_beginner: 'Beginner', level_intermediate: 'Intermediate', level_advanced: 'Advanced',
    stat_courses: 'Courses', stat_hours: 'Hours of Content', stat_hands_on: 'Hands-On Labs', stat_access: 'Lab Access',
    tools_title: 'All the Tools You Need', tools_subtitle: 'Industry-standard tools covered in our courses',
    'shl-100_title': 'SHL-100: Shell Basics',
    'shl-100_desc': 'Linux command line fundamentals: file operations, permissions, pipes, redirection, and shell scripting basics.',
    'shl-200_title': 'SHL-200: Shell Advanced',
    'shl-200_desc': 'Advanced shell scripting: loops, functions, regex, awk, sed, and automation for security workflows.',
    'sql-100_title': 'SQL-100: SQL Injection',
    'sql-100_desc': 'SQL injection techniques: union-based, blind, time-based, error-based injection and WAF bypass methods.',
    'pkt-100_title': 'PKT-100: Packet Capture Basics',
    'pkt-100_desc': 'Network packet analysis fundamentals: Wireshark usage, TCP/IP protocols, and traffic inspection basics.',
    'pkt-200_title': 'PKT-200: Packet Capture Advanced',
    'pkt-200_desc': 'Advanced packet analysis: protocol dissection, malicious traffic detection, and network forensics.',
    'web-100_title': 'WEB-100: Web Security',
    'web-100_desc': 'OWASP Top 10, XSS, CSRF, SSRF, and modern web vulnerability exploitation and defense strategies.',
    about_title: 'Why LC901?', about_subtitle: 'Practical training, not just theory',
    about_labs_title: 'Hands-On Labs', about_labs_desc: 'Real vulnerable environments to practice exploitation techniques',
    about_certs_title: 'Industry Certs', about_certs_desc: 'Earn recognized certifications that employers trust',
    about_tech_title: 'Latest Techniques', about_tech_desc: 'Curriculum updated with current attack vectors and tools',
    about_community_title: 'Community', about_community_desc: 'Join a community of like-minded security professionals',
    about_realworld_title: 'Real-World Scenarios', about_realworld_desc: 'Missions based on actual penetration testing engagements',
    about_career_title: 'Career Ready', about_career_desc: 'Skills that translate directly to security job roles',
    contact_title: 'Get In Touch', contact_subtitle: 'Questions? Reach out anytime',
    contact_email: 'Email:', contact_github: 'GitHub:',
    reg_title: 'Register', reg_name: 'Full Name', reg_name_ph: 'Your name',
    reg_email: 'Email', reg_email_ph: 'you@example.com',
    reg_phone: 'Phone (optional)', reg_phone_ph: '+86 ...',
    reg_submit: 'Submit Registration', reg_success: 'Registration successful! We will contact you soon.',
    reg_error_fields: 'Please fill in all required fields.', reg_error_network: 'Network error. Please check your connection and try again.',
    reg_btn: 'Register', footer_copy: '\u00a9 2026 LC901. All rights reserved.',
    nav_services: 'Services',
    services_hero_title: 'Professional <span>Cybersecurity</span> Services',
    services_hero_desc: 'Comprehensive cybersecurity solutions for enterprises, from risk assessment to penetration testing, from security training to incident response. We protect your digital assets.',
    services_cta_primary: 'Browse Services', services_cta_secondary: 'Contact Us',
    services_overview_title: 'Our Services', services_overview_subtitle: 'Comprehensive cybersecurity protection for your business',
    svc_pen_test_title: 'Penetration Testing', svc_pen_test_desc: 'Simulate real hacker attacks to discover security vulnerabilities in systems, providing detailed remediation recommendations.',
    svc_audit_title: 'Security Audit', svc_audit_desc: 'Comprehensive evaluation of enterprise security posture, checking configurations, policies and compliance to identify potential risks.',
    svc_training_title: 'Security Training', svc_training_desc: 'Provide professional security awareness training and skill enhancement courses for your team to strengthen overall defense capabilities.',
    svc_incident_title: 'Incident Response', svc_incident_desc: 'Rapid response to security incidents with threat analysis, vulnerability remediation and system recovery to minimize damage.',
    svc_risk_title: 'Risk Assessment', svc_risk_desc: 'Systematic identification and evaluation of information security risks, developing effective risk management and mitigation strategies.',
    svc_forensics_title: 'Digital Forensics', svc_forensics_desc: 'In-depth investigation and analysis of security incidents, extracting key evidence and reconstructing the truth.',
    svc_red_team_title: 'Red Team Operations', svc_red_team_desc: 'Simulate advanced persistent threat (APT) attackers to comprehensively test and improve enterprise defense systems.',
    svc_compliance_title: 'Compliance Consulting', svc_compliance_desc: 'Help enterprises meet regulatory and standard requirements such as MLPS 2.0, GDPR, ISO27001.',
    stat_projects: 'Projects Completed', stat_clients: 'Enterprise Clients', stat_vulns: 'Vulnerabilities Found', stat_satisfaction: 'Client Satisfaction',
    why_choose_title: 'Why Choose LC901?', why_choose_subtitle: 'Professional, reliable, and efficient cybersecurity services',
    why_cert_title: 'Professional Certifications', why_cert_desc: 'Team members hold internationally recognized certifications such as OSCP, CEH, CISSP.',
    why_exp_title: 'Rich Experience', why_exp_desc: 'Years of industry experience serving clients in finance, government, technology and multiple sectors.',
    why_tool_title: 'Proprietary Tools', why_tool_desc: 'Self-developed security testing toolchain to improve detection efficiency and accuracy.',
    why_support_title: '24/7 Support', why_support_desc: 'Round-the-clock incident response service to ensure security issues are resolved promptly.',
    hours: 'h'
  },
  zh: {
    nav_home: '首页', nav_courses: '课程', nav_about: '关于', nav_contact: '联系',
    hero_title: '掌握<span>进攻性</span>安全',
    hero_eyebrow: '实战渗透测试培训',
    hero_desc: '面向真实场景的渗透测试课程。学习攻击、加固与防御。',
    hero_btn_courses: '查看课程', hero_btn_learn: '了解更多',
    cta_title: '开启你的攻击之旅',
    cta_desc: '选择一门课程，立即开始实战训练。',
    courses_title: '热门课程', courses_subtitle: '开启你的安全之旅',
    all_courses_title: '全部课程', all_courses_subtitle: '选择你的安全学习路径',
    filter_all: '全部',
    level_beginner: '入门', level_intermediate: '进阶', level_advanced: '高级',
    stat_courses: '门课程', stat_hours: '小时内容', stat_hands_on: '实战靶场', stat_access: '全天访问',
    tools_title: '你需要的所有工具', tools_subtitle: '课程涵盖的行业标准工具',
    'shl-100_title': 'SHL-100：Shell 基础',
    'shl-100_desc': 'Linux 命令行基础：文件操作、权限管理、管道、重定向与 Shell 脚本入门。',
    'shl-200_title': 'SHL-200：Shell 进阶',
    'shl-200_desc': '高级 Shell 脚本：循环、函数、正则、awk、sed 及安全工作流自动化。',
    'sql-100_title': 'SQL-100：SQL 注入',
    'sql-100_desc': 'SQL 注入技术：联合注入、盲注、时间盲注、报错注入及 WAF 绕过方法。',
    'pkt-100_title': 'PKT-100：抓包基础',
    'pkt-100_desc': '网络抓包分析基础：Wireshark 使用、TCP/IP 协议与流量检查入门。',
    'pkt-200_title': 'PKT-200：抓包进阶',
    'pkt-200_desc': '高级抓包分析：协议解析、恶意流量检测与网络取证。',
    'web-100_title': 'WEB-100：Web 安全',
    'web-100_desc': 'OWASP Top 10、XSS、CSRF、SSRF 及现代 Web 漏洞利用与防御策略。',
    about_title: '为什么选择 LC901？', about_subtitle: '实战训练，不止于理论',
    about_labs_title: '实战靶场', about_labs_desc: '真实漏洞环境，实战练习渗透技术',
    about_certs_title: '行业认证', about_certs_desc: '获得雇主认可的专业认证',
    about_tech_title: '前沿技术', about_tech_desc: '课程内容紧跟最新攻击向量与工具',
    about_community_title: '社区', about_community_desc: '加入志同道合的安全从业者社区',
    about_realworld_title: '真实场景', about_realworld_desc: '基于真实渗透测试项目的实战任务',
    about_career_title: '就业就绪', about_career_desc: '直接对接安全岗位的核心技能',
    contact_title: '联系我们', contact_subtitle: '有问题？随时联系',
    contact_email: '邮箱：', contact_github: 'GitHub：',
    reg_title: '报名', reg_name: '姓名', reg_name_ph: '请输入姓名',
    reg_email: '邮箱', reg_email_ph: 'you@example.com',
    reg_phone: '电话（选填）', reg_phone_ph: '+86 ...',
    reg_submit: '提交报名', reg_success: '报名成功！我们会尽快联系您。',
    reg_error_fields: '请填写所有必填项。', reg_error_network: '网络错误，请检查连接后重试。',
    reg_btn: '报名', footer_copy: '\u00a9 2026 LC901 保留所有权利。', hours: '小时',
    nav_services: '服务',
    services_hero_title: '专业<span>网络安全</span>服务',
    services_hero_desc: '为企业提供全方位的网络安全解决方案，从风险评估到渗透测试，从安全培训到应急响应，我们守护您的数字资产。',
    services_cta_primary: '浏览服务', services_cta_secondary: '联系我们',
    services_overview_title: '我们的服务', services_overview_subtitle: '全方位网络安全防护，为您的业务保驾护航',
    svc_pen_test_title: '渗透测试', svc_pen_test_desc: '模拟真实黑客攻击，发现系统中的安全漏洞，提供详细的修复建议。',
    svc_audit_title: '安全审计', svc_audit_desc: '全面评估企业安全状况，检查配置、策略和合规性，识别潜在风险。',
    svc_training_title: '安全培训', svc_training_desc: '为团队提供专业的安全意识培训和技能提升课程，增强整体防御能力。',
    svc_incident_title: '应急响应', svc_incident_desc: '快速响应安全事件，进行威胁分析、漏洞修复和系统恢复，最小化损失。',
    svc_risk_title: '风险评估', svc_risk_desc: '系统性识别和评估信息安全风险，制定有效的风险管理和缓解策略。',
    svc_forensics_title: '数字取证', svc_forensics_desc: '对安全事件进行深度调查和分析，提取关键证据，还原事件真相。',
    svc_red_team_title: '红队演练', svc_red_team_desc: '模拟高级持续性威胁(APT)攻击者，全面检验和提升企业防御体系。',
    svc_compliance_title: '合规咨询', svc_compliance_desc: '帮助企业满足等保2.0、GDPR、ISO27001等法规和标准要求。',
    stat_projects: '完成项目', stat_clients: '企业客户', stat_vulns: '发现漏洞', stat_satisfaction: '客户满意度',
    why_choose_title: '为什么选择 LC901？', why_choose_subtitle: '专业、可靠、高效的网络安全服务',
    why_cert_title: '专业认证', why_cert_desc: '团队成员持有 OSCP、CEH、CISSP 等国际权威认证。',
    why_exp_title: '丰富经验', why_exp_desc: '多年行业经验，服务金融、政府、科技等多个领域客户。',
    why_tool_title: '自有工具', why_tool_desc: '自主研发安全测试工具链，提升检测效率和准确性。',
    why_support_title: '全天候支持', why_support_desc: '7x24 小时应急响应服务，确保安全问题及时解决。',
    contact_title: '联系我们', contact_subtitle: '有任何安全问题？随时与我们取得联系'
  },
  ja: {
    nav_home: 'ホーム', nav_courses: 'コース', nav_about: '概要', nav_contact: 'お問い合わせ',
    hero_title: '<span>オフェンシブ</span>セキュリティをマスター',
    hero_eyebrow: 'ライブペネトレーションテスト研修',
    hero_desc: '実践的なペネトレーションテストコース。ハック、防御、セキュリティを学ぶ。',
    hero_btn_courses: 'コース一覧', hero_btn_learn: '詳細',
    cta_title: '攻撃.Securityの旅を始めよう',
    cta_desc: 'コースを選んで、今日のリアルな訓練を始めましょう。',
    courses_title: '人気コース', courses_subtitle: 'セキュリティの旅を始めよう',
    all_courses_title: '全コース', all_courses_subtitle: '学習パスを選択',
    filter_all: '全て',
    level_beginner: '初級', level_intermediate: '中級', level_advanced: '上級',
    stat_courses: 'コース', stat_hours: '時間のコンテンツ', stat_hands_on: '実践ラボ', stat_access: '24/7アクセス',
    tools_title: '必要なツールすべて', tools_subtitle: 'コースで扱う業界標準ツール',
    'shl-100_title': 'SHL-100：Shell基礎',
    'shl-100_desc': 'Linuxコマンドラインの基礎：ファイル操作、権限、パイプ、リダイレクト、シェルスクリプト入門。',
    'shl-200_title': 'SHL-200：Shell応用',
    'shl-200_desc': '高度なシェルスクリプト：ループ、関数、正規表現、awk、sed、セキュリティワークフローの自動化。',
    'sql-100_title': 'SQL-100：SQLインジェクション',
    'sql-100_desc': 'SQLインジェクション技術：ユニオン、ブラインド、タイムベース、エラーベース、WAF回避。',
    'pkt-100_title': 'PKT-100：パケットキャプチャ基礎',
    'pkt-100_desc': 'ネットワークパケット分析の基礎：Wireshark、TCP/IPプロトコル、トラフィック検査。',
    'pkt-200_title': 'PKT-200：パケットキャプチャ応用',
    'pkt-200_desc': '高度なパケット分析：プロトコル解析、悪意あるトラフィック検出、ネットワークフォレンジクス。',
    'web-100_title': 'WEB-100：Webセキュリティ',
    'web-100_desc': 'OWASP Top 10、XSS、CSRF、SSRF、最新Web脆弱性のエクスプロイトと防御。',
    about_title: 'LC901を選ぶ理由', about_subtitle: '実践的なトレーニング',
    about_labs_title: '実践ラボ', about_labs_desc: '実際の脆弱な環境でエクスプロイト技術を練習',
    about_certs_title: '業界認定', about_certs_desc: '雇用主が信頼する認定資格を取得',
    about_tech_title: '最新技術', about_tech_desc: '最新の攻撃ベクターとツールで更新されたカリキュラム',
    about_community_title: 'コミュニティ', about_community_desc: '同じ志を持つセキュリティ専門家のコミュニティに参加',
    about_realworld_title: '実世界シナリオ', about_realworld_desc: '実際のペネトレーションテストに基づくミッション',
    about_career_title: 'キャリア準備', about_career_desc: 'セキュリティ職務に直結するスキル',
    contact_title: 'お問い合わせ', contact_subtitle: 'ご質問はお気軽に',
    contact_email: 'メール：', contact_github: 'GitHub：',
    reg_title: '登録', reg_name: '氏名', reg_name_ph: '名前を入力',
    reg_email: 'メール', reg_email_ph: 'you@example.com',
    reg_phone: '電話（任意）', reg_phone_ph: '+81 ...',
    reg_submit: '登録を送信', reg_success: '登録成功！近日中にご連絡します。',
    reg_error_fields: '必須項目を入力してください。', reg_error_network: 'ネットワークエラー。接続を確認して再試行してください。',
    reg_btn: '登録', footer_copy: '\u00a9 2026 LC901 All rights reserved.', hours: '時間',
    nav_services: 'サービス',
    services_hero_title: 'プロフェッショナルな<span>サイバーセキュリティ</span>サービス',
    services_hero_desc: 'リスク評価からペネトレーションテスト、セキュリティトレーニングからインシデントレスポンスまで、企業のデジタル資産を包括的に保護します。',
    services_cta_primary: 'サービスを見る', services_cta_secondary: 'お問い合わせ',
    services_overview_title: '私たちのサービス', services_overview_subtitle: '包括的なサイバーセキュリティ保護でビジネスを守ります',
    svc_pen_test_title: 'ペネトレーションテスト', svc_pen_test_desc: '実際のハッカー攻撃をシミュレートし、システムの脆弱性を発見して詳細な修復提案を提供します。',
    svc_audit_title: 'セキュリティ監査', svc_audit_desc: '企業のセキュリティ状況を総合評価し、設定、ポリシー、コンプライアンスをチェックして潜在的なリスクを特定します。',
    svc_training_title: 'セキュリティトレーニング', svc_training_desc: 'チームに専門的なセキュリティ意識トレーニングとスキル向上コースを提供し、全体的な防御力を強化します。',
    svc_incident_title: 'インシデント対応', svc_incident_desc: 'セキュリティインシデントに迅速に対応し、脅威分析、脆弱性修正、システム復旧を行い、被害を最小限に抑えます。',
    svc_risk_title: 'リスク評価', svc_risk_desc: '情報セキュリティリスクを体系的に特定・評価し、効果的なリスク管理と軽減戦略を開発します。',
    svc_forensics_title: 'デジタルフォレンジックス', svc_forensics_desc: 'セキュリティインシデントを深く調査・分析し、重要な証拠を抽出して真実を再現します。',
    svc_red_team_title: 'レッドチーム演習', svc_red_team_desc: '高度な持続的脅威(APT)攻撃者を模擬し、企業の防御体制を総合的にテスト・向上させます。',
    svc_compliance_title: 'コンプライアンスコンサルティング', svc_compliance_desc: 'MLPS 2.0、GDPR、ISO27001などの規制と基準の遵守を支援します。',
    stat_projects: '完了プロジェクト', stat_clients: '企業クライアント', stat_vulns: '発見された脆弱性', stat_satisfaction: 'クライアント満足度',
    why_choose_title: 'なぜ LC901 を選ぶのか？', why_choose_subtitle: 'プロフェッショナル、信頼性、効率性のサイバーセキュリティサービス',
    why_cert_title: '専門認証', why_cert_desc: 'チームメンバーは OSCP、CEH、CISSP などの国際的に認められた認証を取得しています。',
    why_exp_title: '豊富な経験', why_exp_desc: '金融、政府、テクノロジーなど複数の分野のクライアントに多年の業界経験。',
    why_tool_title: '独自ツール', why_tool_desc: '独自のセキュリティテストツールチェーンを開発し、検出効率と精度を向上。',
    why_support_title: '24/7 サポート', why_support_desc: '年中無休のインシデント対応サービスで、セキュリティ問題を迅速に解決。',
    contact_title: 'お問い合わせ', contact_subtitle: 'セキュリティのご不明点はいつでもご連絡ください'
  },
  ko: {
    nav_home: '홈', nav_courses: '코스', nav_about: '소개', nav_contact: '연락처',
    hero_title: '<span>오펜시브</span> 시큐리티 마스터',
    hero_eyebrow: '실전 침투 테스트 훈련',
    hero_desc: '실전 침투 테스트 과정. 해킹, 보안, 방어를 배우세요.',
    hero_btn_courses: '코스 보기', hero_btn_learn: '자세히',
    cta_title: '공격 보안 여정을 시작하세요',
    cta_desc: '코스를 선택하고 오늘 바로 실전 훈련을 시작하세요.',
    courses_title: '인기 코스', courses_subtitle: '보안 여정을 시작하세요',
    all_courses_title: '전체 코스', all_courses_subtitle: '학습 경로를 선택하세요',
    filter_all: '전체',
    level_beginner: '초급', level_intermediate: '중급', level_advanced: '고급',
    stat_courses: '코스', stat_hours: '시간 콘텐츠', stat_hands_on: '실전 랩', stat_access: '24/7 접속',
    tools_title: '필요한 모든 도구', tools_subtitle: '과정에서 다루는 업계 표준 도구',
    'shl-100_title': 'SHL-100: Shell 기초',
    'shl-100_desc': 'Linux 명령어 기초: 파일 조작, 권한, 파이프, 리디렉션, 셸 스크립트 입문.',
    'shl-200_title': 'SHL-200: Shell 심화',
    'shl-200_desc': '고급 셸 스크립트: 루프, 함수, 정규식, awk, sed, 보안 워크플로우 자동화.',
    'sql-100_title': 'SQL-100: SQL 인젝션',
    'sql-100_desc': 'SQL 인젝션 기법: 유니온, 블라인드, 타임베이스, 에러베이스, WAF 우회.',
    'pkt-100_title': 'PKT-100: 패킷 캡처 기초',
    'pkt-100_desc': '네트워크 패킷 분석 기초: Wireshark, TCP/IP 프로토콜, 트래픽 검사.',
    'pkt-200_title': 'PKT-200: 패킷 캡처 심화',
    'pkt-200_desc': '고급 패킷 분석: 프로토콜 해부, 악성 트래픽 탐지, 네트워크 포렌식.',
    'web-100_title': 'WEB-100: 웹 보안',
    'web-100_desc': 'OWASP Top 10, XSS, CSRF, SSRF 및 최신 웹 취약점 익스플로잇과 방어.',
    about_title: 'LC901을 선택하는 이유', about_subtitle: '실전 훈련, 이론 그 이상',
    about_labs_title: '실전 랩', about_labs_desc: '실제 취약한 환경에서 익스플로잇 기술 실습',
    about_certs_title: '업계 인증', about_certs_desc: '고용주가 신뢰하는 인증 취득',
    about_tech_title: '최신 기술', about_tech_desc: '최신 공격 벡터와 도구로 업데이트된 커리큘럼',
    about_community_title: '커뮤니티', about_community_desc: '같은 목표를 가진 보안 전문가 커뮤니티 참여',
    about_realworld_title: '실전 시나리오', about_realworld_desc: '실제 침투 테스트 프로젝트 기반 미션',
    about_career_title: '취업 준비', about_career_desc: '보안 직무에 직결하는 핵심 스킬',
    contact_title: '문의하기', contact_subtitle: '질문이 있으신가요? 언제든 연락하세요',
    contact_email: '이메일:', contact_github: 'GitHub:',
    reg_title: '등록', reg_name: '이름', reg_name_ph: '이름을 입력하세요',
    reg_email: '이메일', reg_email_ph: 'you@example.com',
    reg_phone: '전화 (선택)', reg_phone_ph: '+82 ...',
    reg_submit: '등록 제출', reg_success: '등록 성공! 곧 연락드리겠습니다.',
    reg_error_fields: '필수 항목을 입력해 주세요.', reg_error_network: '네트워크 오류. 연결을 확인하고 다시 시도하세요.',
    reg_btn: '등록', footer_copy: '\u00a9 2026 LC901 All rights reserved.', hours: '시간',
    nav_services: '서비스',
    services_hero_title: '전문 <span>사이버 보안</span> 서비스',
    services_hero_desc: '위험 평가부터 침투 테스트, 보안 교육부터 사고 대응까지 기업의 디지털 자산을 포괄적으로 보호합니다.',
    services_cta_primary: '서비스 보기', services_cta_secondary: '문의하기',
    services_overview_title: '우리의 서비스', services_overview_subtitle: '포괄적인 사이버 보안 보호로 비즈니스를 지키세요',
    svc_pen_test_title: '침투 테스트', svc_pen_test_desc: '실제 해커 공격을 시뮬레이션하여 시스템의 보안 취약점을 발견하고 상세한 수정 권장사항을 제공합니다.',
    svc_audit_title: '보안 감사', svc_audit_desc: '기업 보안 상태를 종합적으로 평가하고 구성, 정책 및 규정 준수를 확인하여 잠재적 위험을 식별합니다.',
    svc_training_title: '보안 교육', svc_training_desc: '팀에게 전문적인 보안 인식 교육 및 기술 향상 과정을 제공하여 전반적인 방어 능력을 강화합니다.',
    svc_incident_title: '사고 대응', svc_incident_desc: '보안 사고에 신속하게 대응하고 위협 분석, 취약점 수정 및 시스템 복구를 통해 피해를 최소화합니다.',
    svc_risk_title: '위험 평가', svc_risk_desc: '정보 보안 위험을 체계적으로 식별하고 평가하여 효과적인 위험 관리 및 완화 전략을 개발합니다.',
    svc_forensics_title: '디지털 포렌식', svc_forensics_desc: '보안 사고에 대한 심층 조사 및 분석을 수행하여 핵심 증거를 추출하고 진실을 재현합니다.',
    svc_red_team_title: '레드 팀 연습', svc_red_team_desc: '고급 지속 위협(APT) 공격자를 모방하여 기업의 방어 체계를 종합적으로 테스트하고 개선합니다.',
    svc_compliance_title: '규정 준수 컨설팅', svc_compliance_desc: 'MLPS 2.0, GDPR, ISO27001 등 규제 및 표준 요구사항 충족을 지원합니다.',
    stat_projects: '완료된 프로젝트', stat_clients: '기업 고객', stat_vulns: '발견된 취약점', stat_satisfaction: '고객 만족도',
    why_choose_title: '왜 LC901 을 선택해야 하나요?', why_choose_subtitle: '전문적이고 신뢰할 수 있으며 효율적인 사이버 보안 서비스',
    why_cert_title: '전문 인증', why_cert_desc: '팀원은 OSCP, CEH, CISSP 등 국제적으로 인정받는 인증을 보유하고 있습니다.',
    why_exp_title: '풍부한 경험', why_exp_desc: '금융, 정부, 기술 등 다양한 분야의 고객에게 수년간의 산업 경험.',
    why_tool_title: '독자 도구', why_tool_desc: '자체 개발 보안 테스트 도구체인으로 감지 효율성과 정확성 향상.',
    why_support_title: '24/7 지원', why_support_desc: '연중무휴 사고 대응 서비스로 보안 문제를 신속하게 해결.',
    contact_title: '문의하기', contact_subtitle: '보안 관련 문의가 있으시면 언제든지 연락하세요'
  },
  ru: {
    nav_home: 'Главная', nav_courses: 'Курсы', nav_about: 'О нас', nav_contact: 'Контакты',
    hero_title: 'Освойте <span>атакующую</span> безопасность',
    hero_eyebrow: 'Практическое обучение пентестингу',
    hero_desc: 'Практические курсы пентестинга для реальных задач. Взлом, защита и обеспечение безопасности.',
    hero_btn_courses: 'Все курсы', hero_btn_learn: 'Подробнее',
    cta_title: 'Начните свой путь в атаку',
    cta_desc: 'Выберите курс и начните практическую подготовку уже сегодня.',
    courses_title: 'Популярные курсы', courses_subtitle: 'Начните свой путь в безопасность',
    all_courses_title: 'Все курсы', all_courses_subtitle: 'Выберите свой путь',
    filter_all: 'Все',
    level_beginner: 'Начальный', level_intermediate: 'Средний', level_advanced: 'Продвинутый',
    stat_courses: 'Курсов', stat_hours: 'Часов контента', stat_hands_on: 'Практические лабы', stat_access: 'Доступ 24/7',
    tools_title: 'Все необходимые инструменты', tools_subtitle: 'Отраслевые инструменты в наших курсах',
    'shl-100_title': 'SHL-100: Основы Shell',
    'shl-100_desc': 'Основы командной строки Linux: файлы, права, каналы, перенаправление, основы скриптинга.',
    'shl-200_title': 'SHL-200: Продвинутый Shell',
    'shl-200_desc': 'Продвинутый скриптинг: циклы, функции, regex, awk, sed, автоматизация безопасности.',
    'sql-100_title': 'SQL-100: SQL-инъекции',
    'sql-100_desc': 'Техники SQL-инъекций: union, blind, time-based, error-based, обход WAF.',
    'pkt-100_title': 'PKT-100: Основы захвата пакетов',
    'pkt-100_desc': 'Основы анализа пакетов: Wireshark, TCP/IP, инспекция трафика.',
    'pkt-200_title': 'PKT-200: Продвинутый захват пакетов',
    'pkt-200_desc': 'Продвинутый анализ: диссекция протоколов, обнаружение вредоносного трафика, форензика.',
    'web-100_title': 'WEB-100: Веб-безопасность',
    'web-100_desc': 'OWASP Top 10, XSS, CSRF, SSRF и эксплуатация современных веб-уязвимостей.',
    about_title: 'Почему LC901?', about_subtitle: 'Практика, а не только теория',
    about_labs_title: 'Практические лабы', about_labs_desc: 'Реальные уязвимые среды для практики',
    about_certs_title: 'Сертификации', about_certs_desc: 'Получите признанные работодателями сертификации',
    about_tech_title: 'Современные техники', about_tech_desc: 'Программа обновлена с актуальными векторами атак',
    about_community_title: 'Сообщество', about_community_desc: 'Присоединяйтесь к сообществу специалистов по безопасности',
    about_realworld_title: 'Реальные сценарии', about_realworld_desc: 'Миссии на основе реальных проектов пентестинга',
    about_career_title: 'Готовность к карьере', about_career_desc: 'Навыки для работы в сфере безопасности',
    contact_title: 'Свяжитесь с нами', contact_subtitle: 'Вопросы? Пишите в любое время',
    contact_email: 'Email:', contact_github: 'GitHub:',
    reg_title: 'Регистрация', reg_name: 'Имя', reg_name_ph: 'Введите имя',
    reg_email: 'Email', reg_email_ph: 'you@example.com',
    reg_phone: 'Телефон (необязательно)', reg_phone_ph: '+7 ...',
    reg_submit: 'Отправить регистрацию', reg_success: 'Регистрация успешна! Мы свяжемся с вами.',
    reg_error_fields: 'Заполните все обязательные поля.', reg_error_network: 'Ошибка сети. Проверьте подключение и повторите.',
    reg_btn: 'Регистрация', footer_copy: '\u00a9 2026 LC901 Все права защищены.', hours: 'ч',
    nav_services: 'Услуги',
    services_hero_title: 'Профессиональные услуги <span>кибербезопасности</span>',
    services_hero_desc: 'Комплексные решения по кибербезопасности для предприятий: от оценки рисков до пентеста, от обучения до реагирования на инциденты. Мы защищаем ваши цифровые активы.',
    services_cta_primary: 'Просмотреть услуги', services_cta_secondary: 'Связаться с нами',
    services_overview_title: 'Наши услуги', services_overview_subtitle: 'Комплексная защита кибербезопасности для вашего бизнеса',
    svc_pen_test_title: 'Пентестинг', svc_pen_test_desc: 'Имитация реальных хакерских атак для обнаружения уязвимостей в системах с подробными рекомендациями по исправлению.',
    svc_audit_title: 'Аудит безопасности', svc_audit_desc: 'Комплексная оценка уровня безопасности предприятия, проверка конфигураций, политик и соответствия для выявления потенциальных рисков.',
    svc_training_title: 'Обучение безопасности', svc_training_desc: 'Профессиональное обучение осведомлённости в безопасности и повышение квалификации команды для укрепления общей защиты.',
    svc_incident_title: 'Реагирование на инциденты', svc_incident_desc: 'Быстрое реагирование на инциденты безопасности: анализ угроз, устранение уязвимостей и восстановление систем для минимизации ущерба.',
    svc_risk_title: 'Оценка рисков', svc_risk_desc: 'Систематическая идентификация и оценка рисков информационной безопасности, разработка эффективных стратегий управления рисками.',
    svc_forensics_title: 'Цифровая криминалистика', svc_forensics_desc: 'Глубокое расследование и анализ инцидентов безопасности, извлечение ключевых доказательств и восстановление картины событий.',
    svc_red_team_title: 'Операции Red Team', svc_red_team_desc: 'Имитация атакующих APU (APT) для комплексной проверки и улучшения системы защиты предприятия.',
    svc_compliance_title: 'Консалтинг соответствия', svc_compliance_desc: 'Помощь предприятиям в удовлетворении требований регуляторов и стандартов: MLPS 2.0, GDPR, ISO27001.',
    stat_projects: 'Завершённых проектов', stat_clients: 'Корпоративных клиентов', stat_vulns: 'Обнаружено уязвимостей', stat_satisfaction: 'Удовлетворённость клиентов',
    why_choose_title: 'Почему LC901?', why_choose_subtitle: 'Профессиональные, надёжные и эффективные услуги кибербезопасности',
    why_cert_title: 'Профессиональные сертификаты', why_cert_desc: 'Члены команды имеют международно признанные сертификаты OSCP, CEH, CISSP.',
    why_exp_title: 'Богатый опыт', why_exp_desc: 'Многолетний опыт работы с клиентами в финансах, государстве, технологиях и других секторах.',
    why_tool_title: 'Собственные инструменты', why_tool_desc: 'Самостоятельно разработанный инструментарий для повышения эффективности и точности обнаружения.',
    why_support_title: 'Поддержка 24/7', why_support_desc: 'Круглосуточная служба реагирования на инциденты для оперативного решения проблем безопасности.',
    contact_title: 'Свяжитесь с нами', contact_subtitle: 'Есть вопросы по безопасности? Свяжитесь с нами в любое время'
  },
  de: {
    nav_home: 'Startseite', nav_courses: 'Kurse', nav_about: 'Über uns', nav_contact: 'Kontakt',
    hero_title: 'Meistere <span>Offensive</span> Security',
    hero_eyebrow: 'Praxisnahe Penetrationstest-Ausbildung',
    hero_desc: 'Praxisnahe Penetrationstest-Kurse für echte Einsätze. Hacken, sichern, verteidigen.',
    hero_btn_courses: 'Kurse ansehen', hero_btn_learn: 'Mehr erfahren',
    cta_title: 'Starte deine Angriffs-Reise',
    cta_desc: 'Wähle einen Kurs und beginne noch heute mit praktischer Ausbildung.',
    courses_title: 'Beliebte Kurse', courses_subtitle: 'Starte deine Reise in die offensive Sicherheit',
    all_courses_title: 'Alle Kurse', all_courses_subtitle: 'Wähle deinen Lernpfad',
    level_beginner: 'Anfänger', level_intermediate: 'Fortgeschritten', level_advanced: 'Experte',
    stat_courses: 'Kurse', stat_hours: 'Stunden Inhalt', stat_hands_on: 'Praxis-Labs', stat_access: '24/7 Zugriff',
    tools_title: 'Alle Tools die du brauchst', tools_subtitle: 'Branchenstandard-Tools in unseren Kursen',
    'shl-100_title': 'SHL-100: Shell-Grundlagen',
    'shl-100_desc': 'Linux-Kommandozeile: Dateioperationen, Berechtigungen, Pipes, Umleitung, Skripting-Grundlagen.',
    'shl-200_title': 'SHL-200: Fortgeschrittene Shell',
    'shl-200_desc': 'Fortgeschrittenes Skripting: Schleifen, Funktionen, Regex, awk, sed, Sicherheitsautomatisierung.',
    'sql-100_title': 'SQL-100: SQL-Injection',
    'sql-100_desc': 'SQL-Injection-Techniken: Union, Blind, Time-Based, Error-Based, WAF-Umgehung.',
    'pkt-100_title': 'PKT-100: Paketmitschnitt Grundlagen',
    'pkt-100_desc': 'Netzwerk-Analyse-Grundlagen: Wireshark, TCP/IP, Traffic-Inspektion.',
    'pkt-200_title': 'PKT-200: Fortgeschrittener Paketmitschnitt',
    'pkt-200_desc': 'Fortgeschrittene Analyse: Protokollzerlegung, Erkennung bösartigen Traffics, Forensik.',
    'web-100_title': 'WEB-100: Web-Sicherheit',
    'web-100_desc': 'OWASP Top 10, XSS, CSRF, SSRF und moderne Web-Schwachstellen.',
    about_title: 'Warum LC901?', about_subtitle: 'Praxisnahes Training, nicht nur Theorie',
    about_labs_title: 'Praxis-Labs', about_labs_desc: 'Echte verwundbare Umgebungen zum Üben',
    about_certs_title: 'Zertifizierungen', about_certs_desc: 'Erhalte anerkannte Zertifizierungen',
    about_tech_title: 'Neueste Techniken', about_tech_desc: 'Lehrplan mit aktuellen Angriffsvektoren',
    about_community_title: 'Community', about_community_desc: 'Trete einer Community von Sicherheitsprofis bei',
    about_realworld_title: 'Realwelt-Szenarien', about_realworld_desc: 'Missionen basierend auf echten Pentest-Engagements',
    about_career_title: 'Karrierebereit', about_career_desc: 'Fähigkeiten für Sicherheitsberufe',
    contact_title: 'Kontakt', contact_subtitle: 'Fragen? Kontaktiere uns jederzeit',
    contact_email: 'E-Mail:', contact_github: 'GitHub:',
    reg_title: 'Anmeldung', reg_name: 'Vollständiger Name', reg_name_ph: 'Dein Name',
    reg_email: 'E-Mail', reg_email_ph: 'du@beispiel.de',
    reg_phone: 'Telefon (optional)', reg_phone_ph: '+49 ...',
    reg_submit: 'Anmeldung absenden', reg_success: 'Anmeldung erfolgreich! Wir melden uns bei dir.',
    reg_error_fields: 'Bitte fülle alle Pflichtfelder aus.', reg_error_network: 'Netzwerkfehler. Bitte überprüfe deine Verbindung.',
    reg_btn: 'Anmelden', footer_copy: '\u00a9 2026 LC901 Alle Rechte vorbehalten.', hours: 'Std',
    nav_services: 'Dienstleistungen',
    services_hero_title: 'Professionelle <span>Cybersicherheits</span>-Dienstleistungen',
    services_hero_desc: 'Umfassende Cybersicherheitslösungen für Unternehmen, von Risikobewertung über Penetrationstests bis hin zu Sicherheitsschulungen und Incident-Response. Wir schützen Ihre digitalen Assets.',
    services_cta_primary: 'Dienstleistungen ansehen', services_cta_secondary: 'Kontakt',
    services_overview_title: 'Unsere Dienstleistungen', services_overview_subtitle: 'Umfassender Cybersicherheitsschutz für Ihr Geschäft',
    svc_pen_test_title: 'Penetrationstest', svc_pen_test_desc: 'Simulation echter Hackerangriffe zur Entdeckung von Sicherheitslücken mit detaillierten Empfehlungen zur Behebung.',
    svc_audit_title: 'Sicherheitsaudit', svc_audit_desc: 'Umfassende Bewertung der Unternehmenssicherheit, Prüfung von Konfigurationen, Richtlinien und Compliance zur Identifizierung potenzieller Risiken.',
    svc_training_title: 'Sicherheitsschulung', svc_training_desc: 'Professionelle Schulungen für Sicherheitsbewusstsein und Fähigkeitsentwicklung für Ihr Team.',
    svc_incident_title: 'Incident-Response', svc_incident_desc: 'Schnelle Reaktion auf Sicherheitsvorfälle mit Bedrohungsanalyse, Fehlerbehebung und Systemwiederherstellung zur Schadensminimierung.',
    svc_risk_title: 'Risikobewertung', svc_risk_desc: 'Systematische Identifizierung und Bewertung von Informationsrisiken mit effektiven Risikomanagement-Strategien.',
    svc_forensics_title: 'Digitale Forensik', svc_forensics_desc: 'Tiefe Untersuchung und Analyse von Sicherheitsvorfällen zur Extraktion wichtiger Beweise und Wiederherstellung der Tatsachen.',
    svc_red_team_title: 'Red-Team-Operationen', svc_red_team_desc: 'Simulation von APT-Angriffen zur umfassenden Prüfung und Verbesserung der Unternehmensabwehr.',
    svc_compliance_title: 'Compliance-Beratung', svc_compliance_desc: 'Hilfe bei der Erfüllung von Vorschriften und Standards wie MLPS 2.0, GDPR, ISO27001.',
    stat_projects: 'Abgeschlossene Projekte', stat_clients: 'Unternehmenskunden', stat_vulns: 'Gefundene Schwachstellen', stat_satisfaction: 'Kundenzufriedenheit',
    why_choose_title: 'Warum LC901?', why_choose_subtitle: 'Professionelle, zuverlässige und effiziente Cybersicherheitsdienstleistungen',
    why_cert_title: 'Professionelle Zertifizierungen', why_cert_desc: 'Teammitglieder besitzen international anerkannte Zertifizierungen wie OSCP, CEH, CISSP.',
    why_exp_title: 'Reiche Erfahrung', why_exp_desc: 'Jahrelange Branchenerfahrung mit Kunden in Finanzwesen, Regierung, Technologie und weiteren Sektoren.',
    why_tool_title: 'Eigene Tools', why_tool_desc: 'Eigenentwickelte Sicherheitstest-Toolchain zur Verbesserung von Effizienz und Genauigkeit.',
    why_support_title: '24/7 Support', why_support_desc: 'Rund-um-die-Uhr-Incident-Response-Service für schnelle Lösung von Sicherheitsproblemen.',
    contact_title: 'Kontakt', contact_subtitle: 'Sicherheitsbedenken? Kontaktieren Sie uns jederzeit'
  },
  fr: {
    nav_home: 'Accueil', nav_courses: 'Cours', nav_about: 'À propos', nav_contact: 'Contact',
    hero_title: 'Maîtrisez la sécurité <span>offensive</span>',
    hero_eyebrow: 'Formation pratique au pentest',
    hero_desc: 'Cours pratiques de pentesting pour les engagements réels. Apprenez à pirater, sécuriser et défendre.',
    hero_btn_courses: 'Voir les cours', hero_btn_learn: 'En savoir plus',
    cta_title: 'Commencez votre parcours offensif',
    cta_desc: "Choisissez un cours et commencez la formation pratique dès aujourd'hui.",
    courses_title: 'Cours populaires', courses_subtitle: 'Commencez votre parcours en sécurité offensive',
    all_courses_title: 'Tous les cours', all_courses_subtitle: 'Choisissez votre parcours',
    level_beginner: 'Débutant', level_intermediate: 'Intermédiaire', level_advanced: 'Avancé',
    stat_courses: 'Cours', stat_hours: 'Heures de contenu', stat_hands_on: 'Labs pratiques', stat_access: 'Accès 24/7',
    tools_title: 'Tous les outils nécessaires', tools_subtitle: 'Outils standards couverts dans nos cours',
    'shl-100_title': 'SHL-100 : Bases du Shell',
    'shl-100_desc': 'Bases de la ligne de commande Linux : fichiers, permissions, pipes, redirection, scripts.',
    'shl-200_title': 'SHL-200 : Shell avancé',
    'shl-200_desc': 'Scripts avancés : boucles, fonctions, regex, awk, sed, automatisation de la sécurité.',
    'sql-100_title': 'SQL-100 : Injection SQL',
    'sql-100_desc': "Techniques d'injection SQL : union, blind, time-based, error-based, contournement WAF.",
    'pkt-100_title': 'PKT-100 : Capture de paquets - Bases',
    'pkt-100_desc': "Bases de l'analyse réseau : Wireshark, TCP/IP, inspection du trafic.",
    'pkt-200_title': 'PKT-200 : Capture de paquets - Avancé',
    'pkt-200_desc': 'Analyse avancée : dissection de protocoles, détection de trafic malveillant, forensique.',
    'web-100_title': 'WEB-100 : Sécurité Web',
    'web-100_desc': 'OWASP Top 10, XSS, CSRF, SSRF et vulnérabilités web modernes.',
    about_title: 'Pourquoi LC901 ?', about_subtitle: 'Formation pratique, pas seulement de la théorie',
    about_labs_title: 'Labs pratiques', about_labs_desc: 'Environnements vulnérables réels pour s\\u0027exercer',
    about_certs_title: 'Certifications', about_certs_desc: 'Obtenez des certifications reconnues par les employeurs',
    about_tech_title: 'Techniques récentes', about_tech_desc: 'Programme mis à jour avec les vecteurs d\\u0027attaque actuels',
    about_community_title: 'Communauté', about_community_desc: 'Rejoignez une communauté de professionnels de la sécurité',
    about_realworld_title: 'Scénarios réels', about_realworld_desc: 'Missions basées sur de vrais engagements de pentest',
    about_career_title: 'Prêt pour la carrière', about_career_desc: 'Compétences directement applicables aux métiers de la sécurité',
    contact_title: 'Contactez-nous', contact_subtitle: 'Des questions ? Contactez-nous',
    contact_email: 'Email :', contact_github: 'GitHub :',
    reg_title: 'Inscription', reg_name: 'Nom complet', reg_name_ph: 'Votre nom',
    reg_email: 'Email', reg_email_ph: 'vous@exemple.com',
    reg_phone: 'Téléphone (facultatif)', reg_phone_ph: '+33 ...',
    reg_submit: "Envoyer l\\u0027inscription", reg_success: 'Inscription réussie ! Nous vous contacterons bientôt.',
    reg_error_fields: 'Veuillez remplir tous les champs obligatoires.', reg_error_network: 'Erreur réseau. Vérifiez votre connexion.',
    reg_btn: "S\\u0027inscrire", footer_copy: '\u00a9 2026 LC901 Tous droits réservés.', hours: 'h',
    nav_services: 'Services',
    services_hero_title: 'Services professionnels de <span>cybersécurité</span>',
    services_hero_desc: "Solutions complètes de cybersécurité pour les entreprises, de l\\u0027évaluation des risques aux tests d\\u0027intrusion, de la formation à la réponse aux incidents. Nous protégeons vos actifs numériques.",
    services_cta_primary: 'Voir les services', services_cta_secondary: 'Nous contacter',
    services_overview_title: 'Nos services', services_overview_subtitle: 'Protection complète de la cybersécurité pour votre entreprise',
    svc_pen_test_title: 'Test d\\u0027intrusion', svc_pen_test_desc: 'Simulation d\\u0027attaques pirates réelles pour découvrir les vulnérabilités du système avec des recommandations détaillées de correction.',
    svc_audit_title: 'Audit de sécurité', svc_audit_desc: 'Évaluation complète de la posture de sécurité de l\\u0027entreprise, vérification des configurations, politiques et conformité pour identifier les risques potentiels.',
    svc_training_title: 'Formation sécurité', svc_training_desc: 'Formation professionnelle à la sensibilisation à la sécurité et perfectionnement des compétences pour votre équipe.',
    svc_incident_title: 'Réponse aux incidents', svc_incident_desc: 'Réponse rapide aux incidents de sécurité avec analyse des menaces, correction des vulnérabilités et récupération du système.',
    svc_risk_title: 'Évaluation des risques', svc_risk_desc: 'Identification et évaluation systématiques des risques de sécurité informatique avec des stratégies efficaces de gestion des risques.',
    svc_forensics_title: 'Forensique numérique', svc_forensics_desc: 'Investigation et analyse approfondies des incidents de sécurité pour extraire des preuves clés et reconstituer la vérité.',
    svc_red_team_title: 'Opérations Red Team', svc_red_team_desc: 'Simulation d\\u0027attaquants APT pour tester et améliorer globalement le système de défense de l\\u0027entreprise.',
    svc_compliance_title: 'Conseil en conformité', svc_compliance_desc: 'Aider les entreprises à se conformer aux réglementations et normes telles que MLPS 2.0, RGPD, ISO27001.',
    stat_projects: 'Projets terminés', stat_clients: 'Clients entreprise', stat_vulns: 'Vulnérabilités trouvées', stat_satisfaction: 'Satisfaction client',
    why_choose_title: 'Pourquoi LC901 ?', why_choose_subtitle: 'Services de cybersécurité professionnels, fiables et efficaces',
    why_cert_title: 'Certifications professionnelles', why_cert_desc: 'Les membres de l\\u0027équipe sont titulaires de certifications internationales reconnues comme OSCP, CEH, CISSP.',
    why_exp_title: 'Grande expérience', why_exp_desc: 'Années d\\u0027expérience sectorielle servant des clients dans la finance, le gouvernement, la technologie et d\\u0027autres secteurs.',
    why_tool_title: 'Outils propriétaires', why_tool_desc: 'Chaîne d\\u0027outils de test de sécurité autodéveloppée pour améliorer l\\u0027efficacité et la précision.',
    why_support_title: 'Support 24/7', why_support_desc: 'Service de réponse aux incidents disponible 24h/24 et 7j/7 pour résoudre rapidement les problèmes de sécurité.',
    contact_title: 'Contactez-nous', contact_subtitle: 'Des préoccupations en matière de sécurité ? Contactez-nous à tout moment'
  },
  es: {
    nav_home: 'Inicio', nav_courses: 'Cursos', nav_about: 'Acerca de', nav_contact: 'Contacto',
    hero_title: 'Domina la seguridad <span>ofensiva</span>',
    hero_eyebrow: 'Entrenamiento práctico de pentesting',
    hero_desc: 'Cursos prácticos de pentesting para escenarios reales. Aprende a hackear, asegurar y defender.',
    hero_btn_courses: 'Ver cursos', hero_btn_learn: 'Más información',
    cta_title: 'Inicia tu viaje ofensivo',
    cta_desc: 'Elige un curso y comienza la formación práctica hoy.',
    courses_title: 'Cursos populares', courses_subtitle: 'Comienza tu camino en seguridad ofensiva',
    all_courses_title: 'Todos los cursos', all_courses_subtitle: 'Elige tu ruta de aprendizaje',
    level_beginner: 'Principiante', level_intermediate: 'Intermedio', level_advanced: 'Avanzado',
    stat_courses: 'Cursos', stat_hours: 'Horas de contenido', stat_hands_on: 'Labs prácticos', stat_access: 'Acceso 24/7',
    tools_title: 'Todas las herramientas que necesitas', tools_subtitle: 'Herramientas estándar cubiertas en nuestros cursos',
    'shl-100_title': 'SHL-100: Fundamentos de Shell',
    'shl-100_desc': 'Fundamentos de línea de comandos Linux: archivos, permisos, pipes, redirección, scripts.',
    'shl-200_title': 'SHL-200: Shell Avanzado',
    'shl-200_desc': 'Scripts avanzados: bucles, funciones, regex, awk, sed, automatización de seguridad.',
    'sql-100_title': 'SQL-100: Inyección SQL',
    'sql-100_desc': 'Técnicas de inyección SQL: union, blind, time-based, error-based, evasión de WAF.',
    'pkt-100_title': 'PKT-100: Captura de paquetes - Básico',
    'pkt-100_desc': 'Fundamentos de análisis de red: Wireshark, TCP/IP, inspección de tráfico.',
    'pkt-200_title': 'PKT-200: Captura de paquetes - Avanzado',
    'pkt-200_desc': 'Análisis avanzado: disección de protocolos, detección de tráfico malicioso, forense.',
    'web-100_title': 'WEB-100: Seguridad Web',
    'web-100_desc': 'OWASP Top 10, XSS, CSRF, SSRF y vulnerabilidades web modernas.',
    about_title: '¿Por qué LC901?', about_subtitle: 'Formación práctica, no solo teoría',
    about_labs_title: 'Labs prácticos', about_labs_desc: 'Entornos vulnerables reales para practicar',
    about_certs_title: 'Certificaciones', about_certs_desc: 'Obtén certificaciones reconocidas por empleadores',
    about_tech_title: 'Técnicas actuales', about_tech_desc: 'Currículo actualizado con vectores de ataque actuales',
    about_community_title: 'Comunidad', about_community_desc: 'Únete a una comunidad de profesionales de seguridad',
    about_realworld_title: 'Escenarios reales', about_realworld_desc: 'Misiones basadas en compromisos reales de pentesting',
    about_career_title: 'Listo para trabajar', about_career_desc: 'Habilidades que se traducen directamente a roles de seguridad',
    contact_title: 'Contáctanos', contact_subtitle: '¿Preguntas? Contáctanos en cualquier momento',
    contact_email: 'Email:', contact_github: 'GitHub:',
    reg_title: 'Registro', reg_name: 'Nombre completo', reg_name_ph: 'Tu nombre',
    reg_email: 'Email', reg_email_ph: 'tu@ejemplo.com',
    reg_phone: 'Teléfono (opcional)', reg_phone_ph: '+34 ...',
    reg_submit: 'Enviar registro', reg_success: '¡Registro exitoso! Nos pondremos en contacto pronto.',
    reg_error_fields: 'Por favor, completa todos los campos obligatorios.', reg_error_network: 'Error de red. Verifica tu conexión.',
    reg_btn: 'Registrarse', footer_copy: '\u00a9 2026 LC901 Todos los derechos reservados.', hours: 'h',
    nav_services: 'Servicios',
    services_hero_title: 'Servicios profesionales de <span>ciberseguridad</span>',
    services_hero_desc: 'Soluciones integrales de ciberseguridad para empresas, desde evaluación de riesgos hasta pruebas de penetración, formación en seguridad hasta respuesta a incidentes. Protegemos sus activos digitales.',
    services_cta_primary: 'Ver servicios', services_cta_secondary: 'Contáctenos',
    services_overview_title: 'Nuestros servicios', services_overview_subtitle: 'Protección integral de ciberseguridad para su negocio',
    svc_pen_test_title: 'Pruebas de penetración', svc_pen_test_desc: 'Simulación de ataques de hackers reales para descubrir vulnerabilidades del sistema con recomendaciones detalladas de remediación.',
    svc_audit_title: 'Auditoría de seguridad', svc_audit_desc: 'Evaluación integral de la postura de seguridad empresarial, verificando configuraciones, políticas y cumplimiento para identificar riesgos potenciales.',
    svc_training_title: 'Formación en seguridad', svc_training_desc: 'Formación profesional en concienciación de seguridad y mejora de habilidades para su equipo.',
    svc_incident_title: 'Respuesta a incidentes', svc_incident_desc: 'Respuesta rápida a incidentes de seguridad con análisis de amenazas, remediación de vulnerabilidades y recuperación del sistema.',
    svc_risk_title: 'Evaluación de riesgos', svc_risk_desc: 'Identificación y evaluación sistemática de riesgos de seguridad de la información con estrategias efectivas de gestión de riesgos.',
    svc_forensics_title: 'Forense digital', svc_forensics_desc: 'Investigación y análisis profundo de incidentes de seguridad para extraer pruebas clave y reconstruir la verdad.',
    svc_red_team_title: 'Operaciones Red Team', svc_red_team_desc: 'Simulación de atacantes APT para probar y mejorar integralmente el sistema de defensa empresarial.',
    svc_compliance_title: 'Consultoría de cumplimiento', svc_compliance_desc: 'Ayudar a las empresas a cumplir con regulaciones y estándares como MLPS 2.0, GDPR, ISO27001.',
    stat_projects: 'Proyectos completados', stat_clients: 'Clientes empresariales', stat_vulns: 'Vulnerabilidades encontradas', stat_satisfaction: 'Satisfacción del cliente',
    why_choose_title: '¿Por qué LC901?', why_choose_subtitle: 'Servicios de ciberseguridad profesionales, confiables y eficientes',
    why_cert_title: 'Certificaciones profesionales', why_cert_desc: 'Los miembros del equipo cuentan con certificaciones internacionalmente reconocidas como OSCP, CEH, CISSP.',
    why_exp_title: 'Amplia experiencia', why_exp_desc: 'Años de experiencia en la industria sirviendo clientes en finanzas, gobierno, tecnología y otros sectores.',
    why_tool_title: 'Opciones propias', why_tool_desc: 'Chain de herramientas de prueba de seguridad autodesarrollada para mejorar la eficiencia y precisión.',
    why_support_title: 'Soporte 24/7', why_support_desc: 'Servicio de respuesta a incidentes las 24 horas para resolver problemas de seguridad rápidamente.',
    contact_title: 'Contáctanos', contact_subtitle: '¿Preocupaciones de seguridad? Contáctanos en cualquier momento'
  }
};

const langNames = {
  en: 'English', zh: '中文', ja: '日本語', ko: '한국어',
  ru: 'Русский', de: 'Deutsch', fr: 'Français', es: 'Español'
};

// === Course Data ===
const courses = [
  { id: 'shl-100', level: 'beginner', hours: 20, price: '$1' },
  { id: 'shl-200', level: 'intermediate', hours: 30, price: '$1' },
  { id: 'sql-100', level: 'intermediate', hours: 25, price: '$5' },
  { id: 'pkt-100', level: 'beginner', hours: 20, price: '$1' },
  { id: 'pkt-200', level: 'intermediate', hours: 30, price: '$2' },
  { id: 'web-100', level: 'advanced', hours: 40, price: '$2' }
];

// === API Base URL ===
const API_BASE = window.location.hostname === 'localhost'
  ? 'http://localhost:3000/api'
  : 'https://api.lc901.com/api';

// === i18n ===
let currentLang = localStorage.getItem('lc901-lang') || 'en';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations['en'][key] || key;
}

function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lc901-lang', lang);
  applyTranslations();
  renderCourses();
  updateLangBtn();
  closeLangMenu();
}

function updateLangBtn() {
  const btn = document.getElementById('lang-btn');
  if (btn) {
    var labels = { en:'EN', zh:'中文', ja:'日', ko:'한', ru:'RU', de:'DE', fr:'FR', es:'ES' };
    btn.textContent = labels[currentLang] || langNames[currentLang] || 'EN';
  }
  document.querySelectorAll('#lang-menu button[data-lang]').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (key === 'hero_title' || key === 'services_hero_title') {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  // Update register buttons in course cards
  document.querySelectorAll('.course-register').forEach(function(btn) {
    btn.textContent = t('reg_btn');
  });

  const nameInput = document.getElementById('reg-name');
  const emailInput = document.getElementById('reg-email');
  const phoneInput = document.getElementById('reg-phone');
  if (nameInput) {
    nameInput.placeholder = t('reg_name_ph');
    nameInput.previousElementSibling.textContent = t('reg_name');
  }
  if (emailInput) {
    emailInput.placeholder = t('reg_email_ph');
    emailInput.previousElementSibling.textContent = t('reg_email');
  }
  if (phoneInput) {
    phoneInput.placeholder = t('reg_phone_ph');
    var label = phoneInput.previousElementSibling;
    if (label) {
      label.innerHTML = t('reg_phone') + ' <span class="opt">(optional)</span>';
    }
  }

  const submitBtn = document.querySelector('#reg-form button[type="submit"]');
  if (submitBtn) submitBtn.textContent = t('reg_submit');

  document.documentElement.lang = currentLang;
}

// === Mobile Menu ===
const menuToggle = document.getElementById('menu-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');
let mobileMenuOpen = false;

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileOverlay) {
      mobileOverlay.classList.toggle('active', mobileMenuOpen);
    }
    // Animate hamburger lines to X
    var svg = menuToggle.querySelector('svg');
    if (svg && mobileMenuOpen) {
      svg.innerHTML = '<path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
    } else if (svg) {
      svg.innerHTML = '<path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
    }
  });
}

// Close mobile menu when clicking a link
if (mobileOverlay) {
  mobileOverlay.addEventListener('click', function(e) {
    if (e.target === mobileOverlay || e.target.classList.contains('mobile-nav-links')) {
      mobileMenuOpen = false;
      mobileOverlay.classList.remove('active');
      var svg = menuToggle ? menuToggle.querySelector('svg') : null;
      if (svg) {
        svg.innerHTML = '<path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
      }
    }
    var links = mobileOverlay.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenuOpen = false;
        mobileOverlay.classList.remove('active');
        var svg = menuToggle ? menuToggle.querySelector('svg') : null;
        if (svg) {
          svg.innerHTML = '<path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>';
        }
      });
    });
  });
}

// === Language Dropdown ===
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');

if (langMenu) {
  langMenu.addEventListener('click', function(e) {
    if (e.target.dataset.lang) {
      setLang(e.target.dataset.lang);
    }
  });
}

if (langBtn) {
  langBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    langMenu.classList.toggle('open');
  });
}

function closeLangMenu() {
  if (langMenu) langMenu.classList.remove('open');
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-dropdown')) {
    closeLangMenu();
  }
});

// === Render Course Cards ===
function createCourseCard(course, showRegister) {
  const tagClass = course.level === 'intermediate' ? 'course-tag intermediate' :
                   course.level === 'advanced' ? 'course-tag advanced' : 'course-tag';
  const levelLabel = t('level_' + course.level);
  const title = t(course.id + '_title');
  const desc = t(course.id + '_desc');
  const hoursLabel = t('hours');

  const card = document.createElement('div');
  card.className = 'course-card';
  card.setAttribute('data-level', course.level);
  card.innerHTML =
    '<div class="course-card-header">' +
      '<span class="course-id">' + course.id.toUpperCase() + '</span>' +
      '<span class="' + tagClass + '">' + levelLabel + '</span>' +
    '</div>' +
    '<h3>' + title + '</h3>' +
    '<p>' + desc + '</p>' +
    '<div class="course-meta">' +
      '<span class="course-hours">' + course.hours + ' ' + hoursLabel + '</span>' +
      '<span class="course-price">' + course.price + '</span>' +
    '</div>' +
    (showRegister ? '<button class="course-register" onclick="openRegModal(\'' + course.id + '\')">Register</button>' : '');
  return card;
}

function renderCourses() {
  const previewEl = document.getElementById('course-preview');
  if (previewEl) {
    previewEl.innerHTML = '';
    courses.slice(0, 3).forEach(function(c) {
      previewEl.appendChild(createCourseCard(c, false));
    });
  }

  const listEl = document.getElementById('course-list');
  if (listEl) {
    listEl.innerHTML = '';
    courses.forEach(function(c) {
      listEl.appendChild(createCourseCard(c, true));
    });
  }

  // Apply filter if exists
  applyFilter();
  initSpotlight();
  initScrollReveal();
}

// === Course Filter ===
function applyFilter() {
  const activeFilter = document.querySelector('.filter-tab.active');
  const filterLevel = activeFilter ? activeFilter.getAttribute('data-filter') : 'all';
  document.querySelectorAll('.course-card').forEach(function(card) {
    if (filterLevel === 'all' || card.getAttribute('data-level') === filterLevel) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('filter-tab')) {
    document.querySelectorAll('.filter-tab').forEach(function(t) { t.classList.remove('active'); });
    e.target.classList.add('active');
    applyFilter();
  }
});

// === Registration Modal ===
const regModal = document.getElementById('reg-modal');
const modalClose = document.getElementById('modal-close');
const regForm = document.getElementById('reg-form');
const regMessage = document.getElementById('reg-message');

function openRegModal(courseId) {
  document.getElementById('reg-course-id').value = courseId;
  document.getElementById('modal-course').textContent = t(courseId + '_title');
  document.getElementById('modal-title').textContent = t('reg_title');
  regMessage.style.display = 'none';
  regForm.style.display = 'block';
  regForm.reset();
  regModal.classList.add('active');
}

function closeRegModal() {
  regModal.classList.remove('active');
}

if (modalClose) {
  modalClose.addEventListener('click', closeRegModal);
}

if (regModal) {
  regModal.addEventListener('click', function(e) {
    if (e.target === regModal) closeRegModal();
  });
}

if (regForm) {
  regForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    var name = document.getElementById('reg-name').value.trim();
    var email = document.getElementById('reg-email').value.trim();
    var phone = document.getElementById('reg-phone').value.trim();
    var courseId = document.getElementById('reg-course-id').value;

    if (!name || !email) {
      showMessage(t('reg_error_fields'), false);
      return;
    }

    try {
      // Fetch CSRF token first
      var csrfRes = await fetch(API_BASE + '/csrf-token');
      var csrfData = await csrfRes.json();
      var csrfToken = csrfData.csrfToken;

      var res = await fetch(API_BASE + '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify({ name: name, email: email, phone: phone, courseId: courseId })
      });

      var data = await res.json();

      if (res.ok) {
        showMessage(t('reg_success'), true);
        regForm.style.display = 'none';
      } else {
        showMessage(data.error || 'Registration failed.', false);
      }
    } catch (err) {
      showMessage(t('reg_error_network'), false);
    }
  });
}

function showMessage(text, success) {
  regMessage.textContent = text;
  regMessage.className = success ? 'reg-success' : 'reg-error';
  regMessage.style.display = 'block';
}

// === Smooth Anchor Scroll Offset ===
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }
});

// === IntersectionObserver Scroll Reveals ===
function initScrollReveal() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counter animation when stats section appears
        if (entry.target.closest && entry.target.closest('#stats-section')) {
          initCounters();
        }
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-scale').forEach(function(el) {
    observer.observe(el);
  });

  // Special handling for .reveal-right elements
  document.querySelectorAll('[style*="translateX(32px)"]').forEach(function(el) {
    el.classList.add('visible');
  });
}

// === Stat Counter Animation ===
let countersAnimated = false;

function initCounters() {
  if (countersAnimated) return;
  countersAnimated = true;

  document.querySelectorAll('.stat-value[data-count]').forEach(function(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const start = performance.now();

    function easeOutExpo(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animate(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const value = Math.round(target * easedProgress);
      el.textContent = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.classList.add('stat-counting');
      }
    }

    requestAnimationFrame(animate);
  });
}

// === Spotlight Card Border Effect ===
function initSpotlight() {
  const cards = document.querySelectorAll('.spotlight-card, .service-card, .feature-card');

  cards.forEach(function(card) {
    card.style.setProperty('--spot-x', '50%');
    card.style.setProperty('--spot-y', '50%');

    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--spot-x', x + '%');
      card.style.setProperty('--spot-y', y + '%');
    });

    card.addEventListener('mouseleave', function() {
      card.style.setProperty('--spot-x', '50%');
      card.style.setProperty('--spot-y', '50%');
    });
  });
}

// === Nav Scroll State ===
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        if (window.scrollY > 40) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// === Ambient Glow Parallax ===
function initAmbientParallax() {
  const glow = document.querySelector('.ambient-glow');
  if (!glow) return;

  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        const scrollY = window.scrollY;
        glow.style.transform = 'translateX(-50%) translateY(' + (scrollY * 0.15) + 'px)';
        ticking = false;
      });
      ticking = true;
    }
  });
}

// === Init ===
document.addEventListener('DOMContentLoaded', function() {
  updateLangBtn();
  applyTranslations();
  renderCourses();
  initScrollReveal();
  initSpotlight();
  initNavScroll();
  initAmbientParallax();

  // Handle initial page load reveals
  setTimeout(function() {
    document.querySelectorAll('.hero-content > *, .hero-visual').forEach(function(el) {
      if (el.classList.contains('reveal-up') || el.classList.contains('reveal-scale')) {
        el.classList.add('visible');
      }
    });
  }, 100);
});
