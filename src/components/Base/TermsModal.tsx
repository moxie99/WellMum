/* eslint-disable unicorn/no-abusive-eslint-disable */
// eslint-disable-next-line
import React from "react";
import { ScrollView } from "react-native";
import Modal from "react-native-modal";

import { Box, Icon } from "@/components/Base/index";
import ToastMessage from "@/components/Base/ToastMessage";
import { Button, Pressable } from "@/components/Button";
import { Text, TextProps } from "@/components/Typography";

const labelProps: TextProps = { variant: "medium12" };
const secondLabelProps: TextProps = { color: "fadeBlue", variant: "medium12" };

const TermsModal = ({
  closeModal,
  isVisible,
  handleAcceptTerms,
  type,
}: {
  closeModal: () => void;
  isVisible: boolean;
  handleAcceptTerms: () => void;
  type?: any;
}) => (
  <Modal isVisible={isVisible} onBackdropPress={closeModal}>
    <ScrollView style={{ marginTop: "10%" }}>
      <ToastMessage />
      <Box
        alignItems="center"
        flex={1}
        justifyContent="center"
        pointerEvents="box-none"
      >
        <Box backgroundColor="white" borderRadius={8} flex={1} width="100%">
          <Box paddingHorizontal="sl" paddingTop="lg">
            <Pressable
              alignItems="center"
              backgroundColor="harsh"
              borderRadius={14}
              height={28}
              justifyContent="center"
              marginBottom="lg"
              onPress={closeModal}
              width={28}
            >
              <Icon name="x-icon" size="s" />
            </Pressable>
          </Box>

          {type === "Tier One" && (
            <Box paddingHorizontal="sl" paddingTop="lg">
              <Text marginBottom="sl" variant="bold14">
                DIGIASSIST TIER 1& 2 ACCOUNT OPENING TERMS AND CONDITIONS{" "}
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                These Terms and Conditions (T&Cs) are between Customers (“I”
                “me” “my” “our” “us” and “your”) and Stanbic IBTC Bank PLC
                (“Stanbic IBTC”, “the Bank”, “we” or “us”) and shall be binding
                on you from the time you register for banking or at the time you
                open an account on the DigiAssist (the “Platform” or “App”).
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                DigiAssist is a mobile app that enables Users (“Staff of Stanbic
                IBTC Bank PLC”) onboard personal and business customers.
                DigiAssist is a tool designed for the onboarding of new
                customers by Staff of Stanbic IBTC Bank PLC and is used to
                collect required information, verify Customer’s identity and
                open their requested account(s). By accessing or registering for
                products and services offered by Stanbic IBTC on the Platform, I
                hereby agree and consent to be bound by these Terms and
                Conditions..
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I confirm and agree that in addition to these Terms and
                Conditions, my/our account(s) and all banking transactions
                between me and Stanbic IBTC shall be governed by the conditions
                specified below and/or the terms of any specific agreement
                between me/us and the Bank or where not regulated by either the
                conditions or such agreement, by customary banking practices in
                Nigeria.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. The operations of the account is limited to a maximum single
                deposit amount of N50,000 and maximum cumulative amount of
                N300,000 for Tier 1 accounts and at any point in time.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                3. TThe operations of the account is limited to a maximum single
                deposit amount of N100,000 and maximum cumulative amount of
                N500,000 for Tier 2 accounts at any point in time.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                4. Mobile banking is limited to a maximum transaction daily
                limit of N50,000 for Tier 1 accounts, and a maximum transaction
                daily limit of N100,000 for Tier 2 accounts.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                5. International funds transfer is not permitted on this
                account.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                6. You will be required to provide further documents at any
                point in time when transacting above the regulated threshold.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                7. This account is strictly savings.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                8. This is an interest-bearing account for individuals who want
                to save for immediate and future needs and earn interest in
                return on the account at 10% per annum of the Central Bank of
                Nigeria Monetary Policy Rate (as published by the CBN from time
                to time. (Interest is forfeited at the 5th withdrawal in a
                month) Interest is paid monthly less 10% withholding tax.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="bold14">
                AUTHORISATION
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                Please note that by accessing the Service using the
                Platform/App, I shall be required to authorize/ authenticate as
                part of the Account Opening process using a One Time Password. A
                unique and time sensitive One time Password (OTP) is used as
                added security when I open an account(s) on the Platform. This
                OTP will be sent to me via SMS and/or email and is valid for the
                particular transaction or request only.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="bold14">
                INACTIVE AND DORMANT ACCOUNTS
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                <Text textAlign="justify" variant="bold14">
                  Inactive Accounts:
                </Text>
                Your account shall become inactive if there has been no customer
                or depositor-initiated transaction for a period of six months
                after the last customer or depositor-initiated transaction. You
                shall not be required to provide any documentation to activate
                the account. A simple deposit or withdrawal shall suffice to
                activate the account.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                <Text textAlign="justify" variant="bold14">
                  Dormant Accounts:
                </Text>
                Your account shall be classified as dormant if there has been no
                customer or depositor-initiated transaction in it for a period
                of one (1) year after the last customer or depositor-initiated
                transaction. To make your account active after dormancy you
                shall provide satisfactory evidence of account ownership means
                of identification and present place of residence.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="bold14">
                DECLARATION
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I hereby declare that the stated particulars are true and
                correct and that I have not withheld any other information which
                may affect the decisions of the Bank.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I consent to you carrying out identity and fraud prevention
                checks and sharing information relating to this application
                through the Fraud Prevention Service I further confirm that I
                will not move my salary account whilst I am subscribed to any
                loan facility with the Bank
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I agree to abide by the terms and conditions which govern the
                operations of Stanbic IBTC Bank PLC.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I hereby apply for the opening of account(s) with Stanbic IBTC
                Bank PLC. I understand that the information given herein and the
                documents supplied are basis for opening such account(s) and I
                therefore warrant that such information is correct.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I further undertake to indemnify the Bank for any loss suffered
                as a result of any false information or error in the information
                provided to the Bank.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="bold14">
                FOREIGN ACCOUNT TAX COMPLIANCE
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I/We understand that as part of your obligations in compliance
                with the United States’ (US) Foreign Account Tax Compliance Act
                (FATCA), financial institutions and banks, including the Bank
                are required to obtain my/ our tax related information to
                determine whether my /our account is a US Account, account held
                by a Recalcitrant Account holder, or Non Participating Financial
                Institution or bank.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I/We provide the Bank my /our consent to:
              </Text>
              <Text textAlign="justify" variant="regular12">
                a) obtain from me /us such tax related information as is
                necessary and in the format determined by the Bank to determine
                whether I / we fall within any of the above categories, in which
                case my /our demographic and transactional data (as determined
                from time to time by the US Internal Revenue Service (“IRS”)),
                will be reportable by the Bank to the IRS;
              </Text>
              <Text textAlign="justify" variant="regular12">
                b) disclose my /our information (as referred to in paragraph (a)
                above) to Withholding Agents if and when required under the
                FATCA regulations;
              </Text>
              <Text textAlign="justify" variant="regular12">
                c) withhold on any payments of US Source Income received by me
                /us to the extent not already done by any other Withholding
                Agent (note that the maximum withholding that may apply to
                impacted US source income under FATCA is 30% ); and
              </Text>
              <Text textAlign="justify" variant="regular12">
                d) close, block or transfer (to one of our related entities) my
                / our account within 90 days of a request for my / our tax
                related information (in the format determined by us), being
                outstanding.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="bold14">
                DEFINITIONS
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                US Account means, an account held by a US citizen, US tax
                resident, or an account having a substantial US owner that is a
                Specified US person as defined in FATCA, US treasury
                regulations1.1471.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                Recalcitrant Account means any account with US indicia that has
                not provided any requested documentation evidencing the account
                holder’s FATCA status or classification.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                Non-Participating Foreign Financial Institution means any
                financial institution or bank that has not registered with the
                IRS to enter into a Foreign Financial Institution Agreement and
                is not otherwise exempt as a certified-deemed compliant
                financial institution or bank or exempt beneficial owner.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                US Source Income means fixed or determinable annual or periodic
                income from sources within the US as defined in FATCA, US
                treasury regulation §1.1473-1(a)(2).. Withholding Agent means a
                financial institution or bank empowered to withhold US Source
                Income in terms of an agreement with the US.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="bold14">
                CARD PRODUCTS
              </Text>
              <Text textAlign="justify" variant="regular12">
                1. “Card” means the Debit, Credit and Prepaid cards including
                any additional, renewal or replacement card(s) that we issue to
                you once you open an account with us and after we have approved
                your application.
              </Text>
              <Text textAlign="justify" variant="regular12">
                2. The Card must be used for only lawful transactions within
                Nigeria or the country where the goods or services are being
                purchased.
              </Text>
              <Text textAlign="justify" variant="regular12">
                3. Your Card has an expiry date and is valid until the last day
                of the month shown on the Card.
              </Text>
              <Text textAlign="justify" variant="regular12">
                4. Your Card shall be auto-renewed upon expiration and the card
                renewal fee shall apply unless you indicate your intention to
                opt out of auto-renewal of your Card by ticking and signing the
                relevant space provided at page 1 Section.
              </Text>
              <Text textAlign="justify" variant="regular12">
                5. hereof and/or by sending an email to
                customercarenigeria@stanbicibtc.com, or by calling or sending an
                SMS to 0700 909 909 909 (please include your account number and
                name). Note that your Card will not be auto-renewed if your
                account is closed and or your card is deactivated.
              </Text>
              <Text textAlign="justify" variant="regular12">
                6. The PIN issued with your card enables you carry out
                transactions such as withdrawals from ATMs, purchases on Point
                of Sale terminals and Web/Online payments.
              </Text>
              <Text textAlign="justify" variant="regular12">
                7. When you use your card for transactions on other channels
                which are not owned by Stanbic IBTC, the rules of use of that
                channel apply in addition to these rules.
              </Text>
              <Text textAlign="justify" variant="regular12">
                7. When you use your card for transactions on other channels
                which are not owned by Stanbic IBTC, the rules of use of that
                channel apply in addition to these rules.
              </Text>
              <Text textAlign="justify" variant="regular12">
                8. You are responsible for the safekeeping and proper use of
                your Card. You are strongly advised to memorize your PIN.
              </Text>
              <Text textAlign="justify" variant="regular12">
                9. I/We hereby consent to the Bank destroying the Cards
                requested by me/us if after 3 months, I/we fail to collect the
                cards and the cost of the cards shall be debited into my/our
                account with the Bank. I/We further agree to bear the cost of
                any Card subsequently requested by me/us.
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                ATM / INTERNET / MOBILE BANKING CONDITIONS
              </Text>
              <Text textAlign="justify" variant="regular12">
                1. I/We hereby request the Bank to grant me/us mobile / internet
                banking access (including viewing & transactional access via the
                channels) and further authorize the Bank to trust the
                information provided by me/us for the service. I/We agree that
                the Bank shall not be liable for placing reliance on the
                information provided by me/us in the event that the information
                is compromised and I/we a loss as a result thereof.
              </Text>
              <Text textAlign="justify" variant="regular12">
                2. I/we understand that my/our password is my/our private access
                control to the ATM and/or Mobile / Internet banking systems and
                hereby covenant not to disclose my/our password to any third
                party or permit any third party to have access to my/our
                password. I/we agree that the Bank shall not be liable or
                responsible for any loss or damage red by me/us on account of
                the compromise or such unauthorized use of my/our password.
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                SMS / EMAIL CONDITION
              </Text>
              <Text textAlign="justify" variant="regular12">
                1. I/we understand that the notification alert via SMS or e-mail
                is within my/our private access and hereby agree not to disclose
                same to any third party. I/we agree that the Bank shall not be
                liable or responsible for any loss, or damage red by me/us on
                account of such unauthorized access to the information sent to
                me.
              </Text>
              <Text textAlign="justify" variant="regular12">
                2. I/We shall indemnify the Bank and keep the Bank fully
                indemnified against all losses, damages, claims, demands and
                expenses whatsoever which may be incurred, imposed or red by the
                Bank as well as against all actions, proceedings or claims
                (including attorney’s fees) whether civil or criminal, which may
                be brought against the Bank in relation to my/we electing to opt
                out of the mandatory SMS alert as directed by the CBN
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                E-SBUSCRIPTION FOR STATEMENT CONDITION
              </Text>
              <Text textAlign="justify" variant="regular12">
                I/we understand that the Statement of Account via e-mail is
                within my/our private access and I hereby agree that the Bank
                shall not be liable or responsible for any loss, or damage red
                by me/us on account of unauthorized access by any third party to
                the information sent to me.
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                DATA PROTECTION
              </Text>
              <Text textAlign="justify" variant="regular12">
                1. You consent to us collecting your Personal Information from
                you and where lawful and reasonable, from public sources for
                credit, fraud and compliance purposes, as well as the purposes
                set out below.
              </Text>
              <Text textAlign="justify" variant="regular12">
                2. If you give us Personal Information about or on behalf of
                another person (including, but not limited to, account
                signatories, shareholders, principal executive officers,
                trustees and beneficiaries), you confirm that you are authorised
                to: (a) give us the Personal Information; {"\n"} (b) consent on
                their behalf to the Processing of their Personal Information,
                specifically any cross-border transfer of Personal Information
                into and outside the country where the products or services are
                provided; and {"\n"}(c) receive any privacy notices on their
                behalf.
              </Text>
              <Text textAlign="justify" variant="regular12">
                3. You consent to us Processing your Personal Information: • to
                provide products and services to you in terms of this agreement
                and any other products and services for which you may apply;{" "}
                {"\n\n"}• to carry out statistical and other analyses to
                identify potential markets and trends, evaluate and improve our
                business (this includes improving existing and developing new
                products and services); {"\n\n"} • in countries outside the
                country where the products or services are provided. These
                countries may not have the same data protection laws as the
                country where the products or services are provided. Where we
                can, we will ask the receiving party to agree to our privacy
                policies; {"\n\n"} • by sharing your Personal Information with
                our third-party service providers, locally and outside the
                country where the products or services are provided. We ask
                people who provide services to us to agree to our privacy
                policies if they need access to any Personal Information to
                carry out their services; and Within the Standard Bank Group
              </Text>
              <Text textAlign="justify" variant="regular12">
                4. You consent to us: {"\n\n"} • validating BVN and using the
                details generated to open your account opening. &quot;
                {"\n\n"}&quot; ⦁ validating your Identification and generating
                identification information through a third party.
              </Text>
              <Text textAlign="justify" variant="regular12">
                5. You will find our Processing practices in the Group’s and our
                privacy statements. These statements are available on the
                Group’s websites or on request.
              </Text>
              <Text textAlign="justify" variant="regular12">
                6. If you are unsure about your tax or legal position because
                your Personal Information is processed in countries other than
                where you live, you should get independent advice.
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                MARKETING AND PROMOTION
              </Text>
              <Text textAlign="justify" variant="regular12">
                Provided you have agreed to the above Data Protection Clause, we
                may use your personal or other information to share information
                with you on new products and services that may be of interest to
                you and from time to time will mail, email or SMS information to
                you about us, our products and services, or our partners and
                their products and services. If you do not wish to continue
                receiving this information, you may contact us and request that
                we delete your information from our mailing list.
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                BANK VERIFICATION NUMBER (BVN) OPERATIONS AND WATCH-LIST FOR THE
                NIGERIAN BANKING INDUSTRY
              </Text>
              <Text textAlign="justify" variant="regular12">
                1. You consent to us applying restrictions on your account and
                reporting to law enforcement agencies if a fraudulent activity
                is associated with the operation of your account.
              </Text>
              <Text textAlign="justify" variant="regular12">
                2. You consent to us reporting to Nigeria Inter-Bank Settlement
                Systems Plc (NIBBS) for update on the Watchlist Data Base of the
                Nigerian Banking Industry and the Central Bank of Nigeria (CBN)
                if a fraudulent activity is associated with the operation of
                your account.
              </Text>
              <Text textAlign="justify" variant="regular12">
                For more information on our products and Service, please go to
                {"\n"}
                <Text color="primary" textAlign="justify" variant="regular12">
                  http://www.stanbicibtcbank.com
                </Text>
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                CONTACT DETAILS FOR NOTICES
              </Text>
              <Text textAlign="justify" variant="regular12">
                For the purpose of service of any legal process you may elect to
                contact the nearest Stanbic IBTC Bank Branch, or to contact our
                Customer Care Centre as referenced in these Terms & Conditions
                kindly call or send an email to the details provided herein
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                GOVERNING LAW
              </Text>
              <Text textAlign="justify" variant="regular12">
                These Terms and Conditions will be governed and construed in
                accordance with the Federal Republic of Nigeria without
                reference to any conflict of law provisions, and any dispute
                arising therefrom shall be determined in accordance with such
                laws. Except stated otherwise, all intellectual property in the
                Platform is owned by or licensed to us or members of Stanbic
                IBTC Group.
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                GENERAL PROVISIONS
              </Text>
              <Text textAlign="justify" variant="regular12">
                No failure or delay by us to exercise any of our rights is to be
                construed as a waiver of any such right, whether this is done
                expressly or is implied. It will also not affect the validity of
                any part of these conditions or prejudice our right to take
                subsequent action against you. {"\n\n"} If any of these terms,
                conditions or provisions are held to be invalid, unlawful or
                unenforceable to any extent; such term, condition or provision
                will be severed from the remaining terms, conditions and
                provisions, which will continue to be valid to the full extent
                permitted by law.{"\n\n"} If you have any questions about this
                terms and conditions or do not understand anything in these
                Terms & Conditions, please call our Customer Care Centre +234 01
                422 2222, or email CustomerCareNigeria@stanbicibtc.com. {"\n\n"}
              </Text>
            </Box>
          )}

          {type === "Tier Three" && (
            <Box paddingHorizontal="sl" paddingTop="lg">
              <Text marginBottom="sl" variant="bold14">
                DIGIASSIST TIER 3 ACCOUNT OPENING TERMS & CONDITIONS
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                These Terms and Conditions (T&Cs) are between Customers (“I”
                “me” “my” “us” “our” and “we”) and Stanbic IBTC Bank PLC
                (“Stanbic IBTC”, “the Bank”, “we” or “us”) and shall be binding
                on you from the time you register for banking or at the time you
                open an account on the DigiAssist (the “Platform” or “App”).
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                DigiAssist is a mobile app that enables Users (“Staff of Stanbic
                IBTC Bank PLC”) onboard personal and business customers.
                DigiAssist is a tool designed for the onboarding of new
                customers by Staff of Stanbic IBTC Bank PLC and is used to
                collect required information, verify Customer’s identity and
                open their requested account(s). By accessing or registering for
                products and services offered by Stanbic IBTC on the Platform, I
                hereby agree and consent to be bound by these Terms and
                Conditions.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I/we confirm and agree that my/our account(s) and all banking
                transactions between me/us (“the customer”) and Stanbic IBTC
                Bank PLC (“the Bank”) shall be governed by the conditions
                specified below and/or the terms of any specific agreement
                between me/us and the Bank or where not regulated by either the
                conditions or such agreement, by customary banking practices in
                Nigeria:
              </Text>

              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. The Bank will not establish or operate the requested
                account(s) unless and until it has received the required
                supporting documents for the account, a list of which has been
                provided to me/us and is included with this application form.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. The Bank is hereby authorized to undertake at my/our cost all
                know your customer (KYC) procedures specified by applicable laws
                and/or regulations and/or bank policies including the
                confirmation of my/our details and legal status at the
                appropriate government registry. I/we hereby authorize the Bank
                to debit my/our account without further notice to me/us for the
                costs related to such KYC procedures.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                3. The Bank may, without, prior notice, impose or change the
                minimum balance requirements for my/our account(s) for or the
                charges relating to such account(s).
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                4. The Bank is authorized, where the balance standing to the
                credit of my/our account(s) is below the required minimum
                balance, to either adjust the rate(s) of interest payable or
                close the account(s).
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                5. The Bank is authorized to transfer money from any deposit
                account I/we maintain to any other account(s) with the Bank
                where the balance is below the required minimum, provided that
                the Bank shall give notice of such transfer.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                6. The Bank shall, in addition to any right of set-off or
                similar right prescribed by law, be entitled, without notice and
                at my/our risk, to combine and consolidate all or any of my/our
                accounts whether held in current or deposit account or otherwise
                and whether in Naira or any other currency (hereinafter referred
                to as “foreign currency”).
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                7. The Bank shall be entitled to retain and not repay any amount
                whatsoever that it owes to me/us or which it holds on my/our
                behalf whether such amount is in Naira or foreign currency
                unless and until all amounts owed by me/us to the Bank have been
                repaid in full, the Bank shall be entitled to appropriate any
                amount so owed to me/us or held on my /our behalf towards the
                payment and discharge of the amounts owed by me/us or either of
                us to the Bank.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                8. When effecting any set-off the Bank shall be entitled at its
                absolute discretion, upon notice to me/us to convert any Naira
                or foreign currency into the currency in which the amount owed
                was incurred at the applicable official exchange rate for the
                currencies in question prevailing in Nigeria at the time of such
                conversion.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                9. I/we shall be responsible for all costs, expenses and
                liabilities arising from the purchase, retention and sale of
                investments made on my/our behalf by the Bank which include but
                are not limited to all taxes, statutory fees, duties and levies.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                10. The Bank is hereby authorized, in the absence of any written
                instruction to the contrary, to place my/our fund(s) in any
                appropriate investment(s) (which for the purpose of this clause
                shall include but not limited to investments in commercial
                papers whether guaranteed by the Bank or otherwise) or on
                deposit and to renew/reinvest at maturity any investment(s) or
                deposit made in my/our name(s) on the same terms and conditions
                that applied to such investment/deposit immediately prior to its
                maturity or on such other terms and conditions as the Bank may,
                in its absolute discretion, consider appropriate under the
                circumstances.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                11. The Bank may, unless otherwise instructed by me/us, retain
                on my/our behalf, on a safe custody basis, any investment
                instrument issued in respect of an investment made on my/our
                behalf and unless otherwise specifically agreed, I/we will not
                have recourse to the Bank for the value or worth of such
                investments.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                12. Where the Bank, in the absence of any previous agreement as
                to interest rates and costs and charges that will apply if
                my/our accounts or any of them becomes overdrawn, in its
                absolute discretion allow us to make any drawings that results
                in my/our account(s) or any of them to become overdrawn, the
                Bank shall be entitled to charge such interest rate and impose
                such charges as, in its absolute discretion, it considers
                appropriate in the circumstances and I/we agree to pay the
                amount overdrawn, such interest and charges to the Bank on
                demand.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                13. I/we agree that where I/we give any instruction for payment
                or payments that in aggregate exceed(s) the amount standing to
                the credit of my/our account(s) against which payment is to be
                made, the Bank reserves the right to decline to carry out such
                instruction or where there is more than one transaction, to
                select the transaction or transactions that shall be executed
                without reference to the date or time of receipt of my/our
                instructions.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                14. Where any uncleared effects credited to my/our account(s) by
                the Bank are subsequently dishonoured and/or the Bank for any
                reason is required to repay to the paying banker or any other
                party all or any part of any amount credited to my/our
                account(s) the Bank will be entitled to debit my/our account(s)
                with the amount of such uncleared effects and/or the amounts to
                be repaid and if, as a result of such debit my/our account or
                any of them goes into debit, unless otherwise agreed I/we will
                be obliged to immediately thereafter repay to the Bank the
                amount of any drawings made against such uncleared effects
                and/or repaid amounts.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                15. No failure or delay in exercising any right, power or
                privilege vested in the Bank by these conditions shall operate
                as a waiver thereof nor shall any partial exercise of such
                right, power or privilege preclude any other or further exercise
                thereof.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                16. If any of the conditions or the provisions specified herein
                are invalid, illegal or unenforceable in any respect under the
                law, the validity, legality and enforceability of the remaining
                conditions and/or provisions contained herein shall not in any
                manner be affected or impaired thereby.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                17. Commission and charges shall be levied in accordance with
                the Bank’s standard scale of charges in force from time to time,
                copies of which are available on request. The Bank reserves the
                right to amend its rates of interest, standard scale of charges
                and these conditions without prior notice to the customer who
                agrees to be bound by such amended interest rates, charges
                and/or conditions.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                18. Where these conditions are signed by or on behalf of more
                than one person as the customer, all of such persons are bound
                by the terms of these conditions.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                19. Any communication by the Bank shall be deemed to have been
                made as soon as it is sent to the most recent address provided
                by me/us and the date indicated on the duplicate copy of such
                letter or on the Bank’s mailing list will constitute the date on
                which the communication was sent. Any statement or confirmation
                of any transaction between me/us or either of us and the Bank
                shall be deemed to have been examined by me/us and to be
                conclusive and binding unless within 10 working days from the
                date specified on such statement/confirmation, I/we or either of
                us advise the Bank in writing that an item contained therein is
                being disputed. In the absence of such notification, the Bank
                shall not be liable to me/us for any such disputed item whether
                or not such item was made in accordance with the mandate from
                time to time given by me/us to the Bank.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                20. “If you wish to be able to give instructions in relation to
                the operation of your account(s) with the Bank orally and/or by
                fax and /or by mail, please indicate your acceptance of either
                or both of the sub paragraphs of this condition specified below
                by placing an “x” in the box(es) beside the accepted sub
                paragraph. Where you do not accept both or either of these sub
                paragraphs, these general conditions will be read and
                interpreted without reference to this condition or the relevant
                sub –paragraph”.{"\n\n"}o I/we have advised the Bank that I/we
                want the Bank to accept instruction in the manner indicated
                below. I/we understand and acknowledge that electronic mail,
                facsimile and verbal communications are insecure transmission
                media. I/we however undertake to indemnify the Bank in full for
                any loss it may suffer or incur by reason of its honoring my/our
                letter, electronic mail, facsimile or verbal instructions,
                irrespective of whether same are erroneous, fraudulent or issued
                otherwise than in accordance with the mandate for my/our
                account(s).{"\n\n"}o The Bank is hereby authorized to honor for
                and to the debit of my/our account(s), any and all payment
                instructions issued in accordance with the mandate for the
                operation of my/our account(s) for which it receives
                confirmation in a format that conforms with the mandate for
                my/our account(s) and which bears or purports to bear the
                facsimile or electronic mail signatures of the person(s) whose
                specimen signatures have been provided to the Bank by me/us.{" "}
                {"\n\n"}o The Bank is hereby authorized to honor for and to the
                debit of my/our account(s), any and all payment instructions/
                confirmations issued or provided by me/us using a pre-agreed
                format for same which may include but is not limited to oral or
                written instructions/ confirmations and where given orally, such
                oral instruction may if previously agreed involve the use of
                specific password(s) and when given in writing, may be given by
                letter, facsimile or electronic mail.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                21. The Bank shall not be liable for all cheques returned unpaid
                for reasons of not having received a prior confirmation via
                telephone, e-mail or written instruction.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                22. Subscription to Bundle Price Plan automatically attracts a
                flat monthly fee (as per bundle option) debited from the
                customer’s account at the end of the month irrespective of
                whether a withdrawal was made or not; as such accounts must be
                duly funded for the price plan to take effect.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                23.1 Bundle pricing plans only become effective at the beginning
                of a new month and cannot be applied on historical transactions.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                23.2 Customers who wish to un- subscribe to the Bundle Price
                Plan may do so via a written instruction or electronic mail
                (where there is requisite indemnity in place) but must be aware
                that the changes will only be effective at the beginning of a
                new month.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                23.3 I/We recognize that the Bank will from time to time conduct
                review on me/us to ensure my/our account(s) conforms to the
                standard KYC (Know Your Customer) regulatory requirement; where
                my/our account(s) is deemed deficient in any material respect as
                a result of the periodic reviews. The Bank may at the expiration
                of 7 (seven) days notice, downgrade my/our account to a lower
                tier/grade (Tier 1) account where I/we fall to provide the
                required documentation/information necessary to regularize KYC
                status of my/our account.
              </Text>
              <Text marginVertical="sl" variant="bold14">
                Inactive Account and Dormant Accounts
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                Inactive Accounts: Your account shall become inactive if there
                has been no customer or depositor initiated transaction for a
                period of six months after the last customer or depositor
                initiated transaction. You shall not be required to provide any
                documentation to activate the account. A simple deposit or
                withdrawal shall suffice to activate the account.&quot;{"\n\n"}
                &quot; Dormant Account: Your account shall be classified as
                dormant if there has been no customer or depositor initiated
                transaction in it for a period of one (1) year after the last
                customer or depositor initiated transaction. To make your
                account active after dormancy you shall provide satisfactory
                evidence of account ownership means of identification and
                present place of residence
              </Text>
              <Text marginVertical="sl" variant="bold14">
                Current Accounts
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I/we confirm and agree that in addition to the Terms and
                Conditions stated above, my/our account(s) and all banking
                transactions between me/us (“the Customer”) and Stanbic IBTC
                Bank PLC (“the Bank”) shall be governed by the conditions
                specified below and/or the terms of any specific agreement
                between me/us and the Bank or where not regulated by either the
                conditions or such agreement, by customary banking practices in
                Nigeria.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. This is a non interest bearing account that allows frequent
                deposits and withdrawals. It can also be referred to as
                chequeing account or a demand deposit account for business
                customers. A minimum account opening balance of N5,000 (five
                thousand Naira) , $50 (fifty United States Dollars) or
                equivalent in other currencies.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                3. CAM fee of N1 for every withdrawal of N1,000 on the account
                (N1 per mille) excluding transfers to accounts in the same name
                or CIF
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                4. Cash withdrawals on domiciliary accounts (whether savings or
                current account) are subject to the Central Bank of Nigeria
                Cashless Withdrawal policy and also attract 0.05% of transaction
                value or $10 whichever is lower
              </Text>
              <Text marginVertical="sl" variant="bold14">
                Savings Accounts
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I/we confirm and agree that in addition to the Terms and
                Conditions stated above, my/our account(s) and all banking
                transactions between me/us (“the Customer”) and Stanbic IBTC
                Bank PLC (“the Bank”) shall be governed by the conditions
                specified below and/or the terms of any specific agreement
                between me/us and the Bank or where not regulated by either the
                conditions or such agreement, by customary banking practices in
                Nigeria.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. This is an interest bearing account for individuals who want
                to save for immediate and future needs and earn interest in
                return on the account at 10% per annum of the Central Bank of
                Nigeria Monetary Policy Rate (as published by the CBN from time
                to time. (interest is forfeited at the 5th withdrawal in a
                month) Interest is paid monthly less 10% withholding tax. The
                account is subject to a minimum account opening balance of
                N2,000 (two thousand Naira) only.
              </Text>
              <Text marginVertical="sl" variant="bold14">
                Chess conditions
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I/we confirm and agree that my/our account(s) and all banking
                transactions between me/us (“the Customer”) and Stanbic IBTC
                Bank PLC (“the Bank”) shall be governed by the conditions
                specified below and/or the terms of any specific agreement
                between me/us and the Bank or where not regulated by either the
                conditions or such agreement, by customary banking practices in
                Nigeria.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. The Bank will not establish or operate the requested
                account(s) unless and until it has received the required
                supporting documents for the account. A list of which has been
                provided to me/us and is included with this application form.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                3. That interest rates will be paid on the account(s) based on
                the existing conditions and subject to prevailing rates.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                4. That withdrawal can only be made by the account
                holder(s)/signatory as specified in the terms of account.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                5. That any change in address or data of the account holder(s)
                shall be communicated to the Bank immediately.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                6. Forfeiture of 1% interest upon more than 1 withdrawal in a
                quarter and forfeiture of interest savings rate + 1% if there
                are more than 4 withdrawals in a month.
              </Text>

              <Text marginVertical="sl" variant="bold14">
                Card Products
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. “Card” means Debit, Credit and Prepaid cards including any
                additional, renewal or replacement card(s) that we issue to
                customers after we have approved the application.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. The Card must be used for only lawful transactions within
                Nigeria or the country where the goods or services are being
                purchased. You may only use the Card issued in your name.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                3. Your Card has an expiry date and is valid until the last day
                of the month shown on the Card.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                4. Your Card shall be auto-renewed upon expiration and the card
                renewal fee shall apply unless you indicate your intention to
                opt out of auto-renewal of your Card by ticking and signing the
                relevant space provided at page 2 Section 3 hereof and/or by
                sending an email to customercarenigeria@stanbicibtc.com, or by
                calling or sending an SMS to 0700 909 909 909 (please include
                your account number and name) or indicating your consent via any
                Stanbic IBTC ATM or our USSD. Note that your Card will not be
                auto-renewed if your account is closed and or your card is
                deactivated.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                5. The PIN issued with your card enables you carry out
                transactions such as withdrawals and purchases from ATMs, Point
                of Sale terminals and Web/Online platforms.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                6. Your Naira card grants you access to make purchases in USD up
                to the limit advised to you by the Bank during each calendar
                year. This limit is subject to change without prior notice to
                you.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                7. All transactions conducted outside Nigeria with your Naira
                card will be converted into Naira and billed against your Naira
                account at the prevailing exchange rate as determined and
                provided by the Bank.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                8. All transactions conducted outside Nigeria must be done
                according to the rules specified by the Bank. A percentage
                commission may apply as determined by the Bank on the
                transactions not aligned within guidelines.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                9. When you use your card for transactions on other channels
                which are not owned and controlled by the Bank, the rules of use
                of that channel apply in addition to these rules.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                10. You are responsible for the safekeeping and proper use of
                your Card. You are strongly advised to memorize your PIN and
                avoid compromising your PIN.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                11. I/We hereby consent to the Bank destroying the Cards
                requested by me/us if after 3 months, I/we fail to collect the
                cards and the cost of the cards shall be debited into my/our
                account with the Bank. I/We further agree to bear the cost of
                any Card subsequently requested by me/us.
              </Text>

              <Text marginVertical="sl" variant="bold14">
                ATM / Internet / Mobile Banking Conditions
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I/We hereby request the Bank to grant me/us mobile / internet
                banking access (including viewing & transactional access via the
                channels) and further authorize the Bank to trust the
                information provided by me/us for the service. I/We agree that
                the Bank shall not be liable for placing reliance on the
                information provided by me/us in the event that the information
                is compromised and I/we suffer a loss as a result thereof.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. I/we understand that my/our password is my/our private access
                control to the ATM and/or Mobile / Internet banking systems and
                hereby covenant not to disclose my/our password to any third
                party or permit any third party to have access to my/our
                password. I/we agree that the Bank shall not be liable or
                responsible for any loss or damage suffered by me/us on account
                of the compromise or such unauthorized use of my/our password.
              </Text>

              <Text marginVertical="sl" variant="bold14">
                SMS/E-Mail Condition
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I/we understand that the notification alert via SMS or e-mail
                is within my/our private access and hereby agree not to disclose
                same to any third party. I/we agree that the Bank shall not be
                liable or responsible for any loss, or damage suffered by me/us
                on account of such unauthorized access to the information sent
                to me.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. I/We shall indemnify the Bank and keep the Bank fully
                indemnified against all losses, damages, claims, demands and
                expenses whatsoever which may be incurred, imposed or suffered
                by the Bank as well as against all actions, proceedings or
                claims (including attorney’s fees) whether civil or criminal,
                which may be brought against the Bank in relation to my/we
                electing to opt out of the mandatory SMS alert as directed by
                the CBN.
              </Text>
              <Text marginVertical="sl" variant="bold14">
                E-subscription for statement condition
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I/We understand that the Statement of Account via e-mail is
                within my/our private access and I hereby agree that the Bank
                shall not be liable or responsible for any loss, or damage
                suffered by me/us on account of unauthorized access by any third
                party to the information sent to me.
              </Text>

              <Text marginVertical="sl" variant="bold14">
                Max Yield (Savings) account
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I/We understand that normal savings interest rate will apply
                to Max Yield Savings Account where the average daily balance on
                the account is less than N100,000 (One Hundred Thousand Naira
                Only).
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. I/We understand that normal savings interest rate plus 0.5%
                will apply to Max Yield Savings Account where the average daily
                balance on the account is more than N100,000 (One Hundred
                Thousand Naira Only). However, the additional 0.5% interest rate
                will not apply where there is more than one (1) withdrawal from
                the account in a month but where there is more than four (4)
                withdrawals from the account in a month, the normal savings
                interest rate plus 0.5% will be forfeited.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                3. I/We understand that cheque book that is not valid for
                clearing will be issued on Max Yield Savings Account at a
                minimum fee of N1,575.00 for 50 leaves and the cheques can only
                be cashable at any Stanbic IBTC Bank PLC Branch.
              </Text>

              <Text marginVertical="sl" variant="bold14">
                High Yield Current Account Gold (HYCA GOLD)
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I/We understand that opening balance of N500,000.00 and
                minimum credit balance of N20,000.00 shall apply to the account.
                I/We also understand that N2,500.00 membership fee shall apply
                to the account monthly which gives me/us access to VIP Lounges
                in over 600 airports around the world and that the Bank shall
                waive this membership fee where I/We maintain a daily minimum
                balance of N500,000.00 on the account. I/We shall however pay
                for services enjoyed at the VIP Lounges.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. I/We understand that the following interest regime shall
                apply to the credit balances in the account: N500,000.00 to
                N999,999.99 is 0.01% p.a; N1,000,000.00 to N4,999,999.99 is
                0.015% p.a; N5,000,000.00 and above is 0.05% p.a. I/We further
                understand that I/We shall be entitled to free gold cheques book
                but shall pay for the gold debit card (MasterCard).
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                3. I/We acknowledge that the account has features of both
                current and savings account and has online banking services
                (Internet & Mobile Banking). The N50.00 Electronic money
                transfer levy shall be chargeable on the account for Nigeria
                (CBN) Regulation
              </Text>
              <Text marginVertical="sl" variant="bold14">
                High Yield Current Account Platinum (HYCA PLATINUM)
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. I/We understand that opening balance of N1,000,000.00 shall
                apply to the account and that the Bank shall give me/us free
                membership of the priority pass programme in over 1000 airports
                around the world. I/We further understand that zero current
                account maintenance fee shall apply to the account provided I/We
                maintain a daily minimum balance of N1,000,000.00 on the
                account.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. I/We understand that the following interest regime shall
                apply to the credit balances in the account: N1,000,000.00 to
                N4,999,999.99 is 0.015% p.a; N5,000,000.00 and above is 0.05%
                p.a. I/We further understand that I/We shall be entitled to free
                platinum cheque book and debit card (MasterCard).
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                3. I/We acknowledge that the account has features of both
                current and savings account and has online banking services
                (Internet & Mobile Banking). The N50.00 Electronic shall be
                chargeable on the account for third party deposits above
                N10,000.00 in line with the Central Bank of Nigeria (CBN)
                Regulation.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                4. I/We shall be entitled to free access to the Bank’s platinum
                in-branch lounges at Lagos, Abuja and Port Harcourt in addition
                to 24/7 dedicated service support via the Bank’s platinum
                support centre.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I/we acknowledge that you are obliged to comply with the
                international sanction laws and regulations issued by OFAC, EU,
                UN, HMT (as well as local laws and regulations applicable to
                issuing banks). Therefore, I/we agree that you reserve the right
                to terminate this contract to open an Account for me/us without
                liability on your part and you have no obligation to make any
                payment under, or otherwise to implement this contract if I
                violate any OFAC, EU, UN and HTM sanctions or there is
                involvement by any person (natural, corporate or governmental)
                listed in the OFAC, EU, {"\n\n"} UN, HMT or local sanctions
                lists, or any involvement by or nexus with Cuba, Sudan, North
                Korea, Iran or Myanmar or such other countries as may be
                included from time to time in the sanctions list, or any of
                their governmental agencies. {"\n\n"}I/we hereby specifically
                indemnify and hold you harmless against any and all liability,
                losses or damages of whatsoever nature (whether direct, indirect
                and/or consequential), which you may suffer as a result of any
                and all funds in my/our account being frozen, blocked and/or
                seized or which you may suffer as a result of any claim, demand
                and action made against you. For avoidance of doubt, I/we waive
                and renounce all rights, actions or circumstances whatsoever
                which might constitute a defense. I/we hereby waive any rights
                which I/we may have or obtain against you arising directly or
                indirectly from any losses or damages of whatsoever nature which
                I/we may suffer in consequence of contravention of OFAC, EU, UN
                and HMT sanctions or any law/regulation prohibiting money
                laundering/financing of terrorism in Nigeria. {"\n\n"}For
                purposes of No. 7 above, OFAC, EU, UN and HMT sanctions mean
                sanctions imposed from time to time by Office of Foreign Assets
                Control of the Department of Treasury of the United States of
                America (OFAC), European Union (EU), United Nations (UN) and Her
                Majestys Treasury of the United Kingdom (HMT) relating to, but
                not limited to entities, parties, shipping lines. Carriers,
                vessels, multimodal transport operators, freight forwarders,
                agents at the port of discharge and agents of any related
                party.;
                {"\n\n"}By signing this form, I/We hereby consent to the Bank
                sharing my/our data and confidential information within the
                Standard Bank Group if necessary for purposes of marketing and
                rendering services to me/us. The terms and conditions stated
                above shall be governed and construed in accordance with
                Nigerian Law and I/we agree that any proceedings arising out of
                or in connection therewith may be brought in the High Court of
                Justice and we irrevocably submit to such Court’s jurisdiction.
              </Text>
              <Text marginVertical="sl" variant="bold14">
                Foreign Account Tax Compliance Act
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I/We understand that as part of your obligations in compliance
                with the United States’ (US) Foreign Account Tax Compliance Act
                (FATCA), financial institutions and banks, including the Bank
                are required to obtain my/ our tax related information to
                determine whether my /our account is a US Account, account held
                by a Recalcitrant Account holder, or Non-Participating Financial
                Institution or bank.
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                I/We provide the Bank my /our consent to:{"\n\n"} a) obtain from
                me /us such tax related information as is necessary and in the
                format determined by the Bank to determine whether I / we fall
                within any of the above categories, in which case my /our
                demographic and transactional data (as determined from time to
                time by the US Internal Revenue Service (“IRS”)), will be
                reportable by the Bank to the IRS;{"\n"}
                b) Disclose my /our information (as referred to in paragraph (a)
                above) to Withholding Agents if and when required under the
                FATCA regulations;{"\n"}
                c) withhold on any payments of US Source Income received by me
                /us to the extent not already done by any other Withholding
                Agent (note that the maximum withholding that may apply to
                impacted US source income under FATCA is 30%); and{"\n"}
                d) close, block or transfer (to one of our related entities) my
                / our account within 90 days of a request for my / our tax
                related information (in the format determined by us), being
                outstanding.”
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                2. I/We understand that the following interest regime shall
                apply to the credit balances in the account: N1,000,000.00 to
                N4,999,999.99 is 0.015% p.a; N5,000,000.00 and above is 0.05%
                p.a. I/We further understand that I/We shall be entitled to free
                platinum cheque book and debit card (MasterCard).
              </Text>
              <Text marginVertical="sl" variant="bold14">
                Definitions:
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                US Account means, an account held by a US citizen, US tax
                resident, or an account having a substantial US owner that is a
                Specified US person as defined in FATCA,US treasury
                regulation§1.1471.{"\n"} Recalcitrant Account means any account
                with US indicia that has not provided any requested
                documentation evidencing the account holder’s FATCA status or
                classification.{"\n"}
                Non-Participating Foreign Financial Institution means any
                financial institution or bank that has not registered with the
                IRS to enter into a Foreign Financial Institution Agreement and
                is not otherwise exempt as a certified-deemed compliant
                financial institution or bank or exempt beneficial owner. {"\n"}
                US Source Income means fixed or determinable annual or periodic
                income from sources within the US as defined in FATCA, US
                treasury regulation §1.1473-1(a)(2)..{"\n"} Withholding Agent
                means a financial institution or bank empowered to withhold US
                Source Income in terms of an agreement with the US.
              </Text>
              <Text marginVertical="sl" variant="bold14">
                Data Protection
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. You consent to us collecting your Personal Information from
                you and where lawful and reasonable, from public sources for
                credit, fraud and compliance purposes, as well as the purposes
                set out below.{"\n"} 2. If you give us Personal Information
                about or on behalf of another person (including, but not limited
                to, account signatories, shareholders, principal executive
                officers, trustees and beneficiaries), you confirm that you are
                authorised to: {"\n"} (a) give us the Personal Information;
                {"\n"} (b) consent on their behalf to the Processing of their
                Personal Information, specifically any cross-border transfer of
                Personal Information into and outside the country where the
                products or services are provided; and {"\n"} (c) receive any
                privacy notices on their behalf.{"\n"} 3. You consent to us
                Processing your Personal Information:{"\n"} • to provide
                products and services to you in terms of this agreement and any
                other products and services for which you may apply;{"\n"} • by
                sharing your Personal information with our third-party service
                providers, locally and outside the country where the products or
                services are provided. We ask people who provide services to us
                to agree to our privacy policies. If they need access to any
                Personal information to carry out their services; and within the
                Standard Bank Group.{"\n"} • In the event that you fail to repay
                all fees and charges arising from your card transactions as
                required, the Bank shall have the right to report the unpaid
                fees and charges against you as delinquent credit to CBN through
                the Credit Risk Management System (CRMS) or other Credit Bureau
                Agencies, and request the CBN to exercise its regulatory power
                to direct all banks under its regulatory supervision to set-off
                your indebtedness from any money standing to your credit in any
                bank account and from any other financial assets they may be
                holding for your behalf. You hereby waive any right of
                confidentiality in this regard, whether arising under common law
                or statute or in any other manner whatsoever. {"\n"} 4. You will
                find our Processing practices in the Group’s and our privacy
                statements. These statements are available on the Group’s
                websites or on request. {"\n"} 5. If you are unsure about your
                tax or legal position because your Personal Information is
                processed in countries other than where you live, you should get
                independent advice.
              </Text>
              <Text marginVertical="sl" variant="bold14">
                Marketing and Promotion
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                Provided you have agreed to the above Data Protection Clause, we
                may use your personal or other information to share information
                with you on new products and services that may be of interest to
                you and from time to time will mail, email or SMS information to
                you about us, our products and services, or our partners and
                their products and services. If you do not wish to continue
                receiving this information, you may contact us and request that
                we delete you information from our mailing list
              </Text>
              <Text marginVertical="sl" variant="bold14">
                Bank Verification Number (BVN) Operations and Watch-List for the
                Nigerian Banking Industry
              </Text>
              <Text marginBottom="sl" textAlign="justify" variant="regular12">
                1. You consent to us applying restrictions on your account and
                reporting to law enforcement agencies if a fraudulent activity
                is associated with the operation of your account.&quot;{"\n\n"}
                &quot; 2. You consent to us reporting to Nigeria Inter-Bank
                Settlement Systems Plc (NIBBS) for update on the Watchlist Data
                Base of the Nigerian Banking Industry and the Central Bank of
                Nigeria (CBN) if a fraudulent activity is associated with the
                operation of your account.
              </Text>
              <Text textAlign="justify" variant="regular12">
                For more information on our products and Service, please go to
                {"\n"}
                <Text color="primary" textAlign="justify" variant="regular12">
                  http://www.stanbicibtcbank.com
                </Text>
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                CONTACT DETAILS FOR NOTICES
              </Text>
              <Text textAlign="justify" variant="regular12">
                For the purpose of service of any legal process you may elect to
                contact the nearest Stanbic IBTC Bank Branch, or to contact our
                Customer Care Centre as referenced in these Terms & Conditions
                kindly call or send an email to the details provided herein
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                GOVERNING LAW
              </Text>
              <Text textAlign="justify" variant="regular12">
                These Terms and Conditions will be governed and construed in
                accordance with the Federal Republic of Nigeria without
                reference to any conflict of law provisions, and any dispute
                arising therefrom shall be determined in accordance with such
                laws. Except stated otherwise, all intellectual property in the
                Platform is owned by or licensed to us or members of Stanbic
                IBTC Group.
              </Text>
              <Text marginVertical="sl" textAlign="justify" variant="bold14">
                GENERAL PROVISIONS
              </Text>
              <Text textAlign="justify" variant="regular12">
                No failure or delay by us to exercise any of our rights is to be
                construed as a waiver of any such right, whether this is done
                expressly or is implied. It will also not affect the validity of
                any part of these conditions or prejudice our right to take
                subsequent action against you. {"\n\n"} If any of these terms,
                conditions or provisions are held to be invalid, unlawful or
                unenforceable to any extent; such term, condition or provision
                will be severed from the remaining terms, conditions and
                provisions, which will continue to be valid to the full extent
                permitted by law. {"\n\n"} If you have any questions about this
                terms and conditions or do not understand anything in these
                Terms & Conditions, please call our Customer Care Centre +234 01
                422 2222, or email CustomerCareNigeria@stanbicibtc.com. {"\n\n"}
                ;
              </Text>
            </Box>
          )}

          <Box paddingHorizontal="sl">
            <Button
              backgroundColor="classicBlue"
              borderRadius={10}
              label="CLOSE"
              labelProps={labelProps}
              marginBottom="md"
              marginTop="md"
              onPress={closeModal}
              paddingVertical="sm"
            />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  </Modal>
);

export default TermsModal;
