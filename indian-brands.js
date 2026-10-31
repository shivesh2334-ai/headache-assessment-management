// Indian market reference checked 31 October 2026. Static snapshots, not live quotes.
const INDIA_BRAND_REVIEWED = '31 October 2026';
const INDIA_DRUG_CLASSES = [
  {
    "id": "analgesic",
    "name": "Simple analgesics and paracetamol combinations",
    "use": "Acute migraine / tension-type",
    "note": "Do not duplicate paracetamol across products. Combination analgesic overuse threshold is lower than for simple analgesics."
  },
  {
    "id": "nsaid",
    "name": "NSAIDs (including aspirin and indomethacin)",
    "use": "Acute pain; indomethacin-responsive syndromes",
    "note": "Check renal, GI, bleeding and cardiovascular risks. Never combine multiple NSAIDs. The five-product limit includes the triptan/NSAID combination."
  },
  {
    "id": "triptan",
    "name": "Triptans and triptan combinations",
    "use": "Acute migraine",
    "note": "Avoid with coronary/cerebrovascular disease or uncontrolled hypertension. Oral packs are not substitutes for SC/nasal treatment in cluster headache. Zolmitriptan nasal and sumatriptan SC Indian pack details were not verified."
  },
  {
    "id": "antiemetic",
    "name": "Dopamine-antagonist antiemetics and combinations",
    "use": "Migraine-associated nausea",
    "note": "Metoclopramide may cause extrapyramidal effects; review contraindications and duration. Paramet contains only 5 mg metoclopramide per tablet."
  },
  {
    "id": "beta",
    "name": "Beta blockers and preventive combinations",
    "use": "Migraine prevention",
    "note": "Propranolol requires review for asthma, bradycardia and hypotension. Combination SR products are not dose-for-dose substitutes for immediate-release propranolol."
  },
  {
    "id": "arb",
    "name": "Angiotensin receptor blockers",
    "use": "Migraine prevention (clinician-selected use)",
    "note": "Candesartan is unsuitable in pregnancy; monitor BP, renal function and potassium. Antihypertensive combinations were not added as headache options."
  },
  {
    "id": "tca",
    "name": "Tricyclic antidepressants",
    "use": "Migraine / frequent tension-type prevention",
    "note": "Review sedation, anticholinergic effects and conduction risk. No suitable headache-specific fixed-dose combination was verified."
  },
  {
    "id": "aed",
    "name": "Antiseizure medicines",
    "use": "Selected preventive / specialist options",
    "note": "Topiramate: reproductive safety review; contraindicated for migraine prevention in pregnancy. Valproate has major fetal risks. Lamotrigine needs slow titration/rash counselling. Gabapentin evidence depends on syndrome. No headache-specific FDC verified."
  },
  {
    "id": "ccb",
    "name": "Calcium channel blockers",
    "use": "Cluster prevention: verapamil",
    "note": "Baseline and serial ECG with verapamil titration. No headache-specific fixed-dose combination verified."
  },
  {
    "id": "steroid",
    "name": "Systemic corticosteroids",
    "use": "Specialist transitional cluster treatment",
    "note": "Prednisone is named in the clinical reference; a verified Indian prednisolone product is shown as a separate molecule. Do not auto-substitute or infer a regimen from pack strength. No headache-specific FDC verified."
  },
  {
    "id": "lithium",
    "name": "Lithium salts",
    "use": "Specialist cluster / hypnic prevention",
    "note": "Narrow therapeutic index; monitor serum level, renal and thyroid function and interactions. No headache-specific FDC verified."
  },
  {
    "id": "cai",
    "name": "Carbonic anhydrase inhibitors",
    "use": "IIH after diagnostic confirmation",
    "note": "Monitor renal function, electrolytes and tolerability; urgent visual deterioration needs specialist care. No headache-specific FDC verified."
  },
  {
    "id": "gepant",
    "name": "Gepants (CGRP receptor antagonists)",
    "use": "Migraine",
    "note": "Rimegepant Indian listing verified. Ubrogepant and atogepant Indian brand/pack prices were not verified; no invented local prices or combinations."
  },
  {
    "id": "mab",
    "name": "CGRP monoclonal antibodies",
    "use": "Migraine prevention",
    "note": "Erenumab Indian listing verified. Fremanezumab, galcanezumab and eptinezumab domestic retail pack/MRP not verified. Named-patient import listings do not establish routine Indian availability. No FDC verified."
  },
  {
    "id": "botulinum",
    "name": "Botulinum toxin",
    "use": "Specialist chronic migraine prevention",
    "note": "Product-specific administration and units; vial price is not total treatment cost. No fixed-dose combination."
  },
  {
    "id": "local",
    "name": "Local anaesthetic (IV lidocaine)",
    "use": "Specialist SUNCT/SUNA rescue",
    "note": "Hospital cardiac monitoring and formulation verification required. No home infusion directions or headache-specific FDC."
  },
  {
    "id": "caffeine",
    "name": "Caffeine-containing products",
    "use": "Combination analgesic adjunct",
    "note": "The listed combination is for acute pain, not a substitute for isolated bedtime caffeine in hypnic headache. A standalone Indian caffeine pack/price for this use was not verified."
  },
  {
    "id": "ditan",
    "name": "Ditans (lasmiditan)",
    "use": "Acute migraine reference",
    "note": "No verified Indian marketed brand, pack price or fixed-dose combination found. Do not infer local availability from an overseas brand."
  },
  {
    "id": "oxygen",
    "name": "Medical oxygen",
    "use": "Acute cluster headache",
    "note": "No standardized retail brand/pack price verified. Licensed medical-gas supply, cylinder/refill, regulator and mask costs vary; request a local supplier quote. Not a fixed-dose combination."
  },
  {
    "id": "excluded",
    "name": "Opioids, barbiturates and ergots mentioned in precautions",
    "use": "Avoid / restricted options",
    "note": "Opioids and butalbital are listed as treatments to avoid, so no shopping catalogue is provided. Ergot products are mentioned for vascular contraindications, not added as recommended headache therapy."
  }
];
const INDIA_DRUG_PRODUCTS = [
  {
    "id": "dolo",
    "name": "Dolo 650",
    "composition": "Paracetamol 650 mg",
    "marketer": "Micro Labs Ltd",
    "manufacturer": "Micro Labs Limited",
    "pack": "15 tablets",
    "price": 32.28,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/dolo-650mg-tablet-74467",
    "classes": [
      "analgesic"
    ],
    "combination": false
  },
  {
    "id": "saridon",
    "name": "New Saridon",
    "composition": "Paracetamol 500 mg + caffeine 50 mg",
    "marketer": "Bayer Pharmaceuticals Pvt Ltd",
    "manufacturer": "Piramal Enterprises Limited",
    "pack": "10 tablets",
    "price": 55,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/Saridon-Tablet-123063",
    "classes": [
      "analgesic",
      "caffeine"
    ],
    "combination": true,
    "note": "New formulation as listed; do not assume older Saridon composition."
  },
  {
    "id": "paramet",
    "name": "Paramet",
    "composition": "Paracetamol 500 mg + metoclopramide 5 mg",
    "marketer": "Wallace Pharmaceuticals Pvt Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "10 tablets",
    "price": 32.34,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/paramet-5-mg-500-mg-tablet-65975",
    "classes": [
      "analgesic",
      "antiemetic"
    ],
    "combination": true,
    "note": "Listing not offered for sale at review. Count all paracetamol sources."
  },
  {
    "id": "brufen",
    "name": "Brufen 400",
    "composition": "Ibuprofen 400 mg",
    "marketer": "Abbott",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "20 tablets",
    "price": 25.75,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/brufen-400-tablet-70206",
    "classes": [
      "nsaid"
    ],
    "combination": false
  },
  {
    "id": "naprosyn",
    "name": "Naprosyn 500 +",
    "composition": "Naproxen 550 mg (as listed)",
    "marketer": "RPG Life Sciences Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "15 tablets",
    "price": 162.53,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/Naprosyn-Tablet-872331",
    "classes": [
      "nsaid"
    ],
    "combination": false,
    "note": "The '+' brand name is a single-ingredient product, not a fixed-dose combination. Confirm naproxen salt/equivalent on pack."
  },
  {
    "id": "disprin",
    "name": "Disprin Regular",
    "composition": "Aspirin 325 mg",
    "marketer": "Reckitt Benckiser (India) Pvt Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "10 effervescent tablets",
    "price": 7.07,
    "priceType": "Listed pack MRP",
    "url": "https://pharmeasy.in/medicines/disprin-regular-325mg-tablet-10-s-213369/",
    "classes": [
      "nsaid"
    ],
    "combination": false
  },
  {
    "id": "indocap",
    "name": "Indocap",
    "composition": "Indomethacin 25 mg",
    "marketer": "Jagsonpal Pharmaceuticals Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "15 capsules",
    "price": 112.93,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/indocap-capsule-1139520",
    "classes": [
      "nsaid"
    ],
    "combination": false
  },
  {
    "id": "vasograin",
    "name": "Vasograin Plus",
    "composition": "Sumatriptan 85 mg + naproxen 500 mg",
    "marketer": "Cadila Pharmaceuticals Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "10 tablets",
    "price": 699,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/vasograin-plus-tablet-1147884",
    "classes": [
      "nsaid",
      "triptan"
    ],
    "combination": true,
    "note": "Different from original Vasograin (ergot-containing formulations). Apply triptan vascular contraindications."
  },
  {
    "id": "suminat",
    "name": "Suminat 50",
    "composition": "Sumatriptan 50 mg",
    "marketer": "Sun Pharmaceutical Industries Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "1 tablet",
    "price": 59.86,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/suminat-50-tablet-70659",
    "classes": [
      "triptan"
    ],
    "combination": false
  },
  {
    "id": "rizact",
    "name": "Rizact 10",
    "composition": "Rizatriptan 10 mg",
    "marketer": "Cipla Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "4 tablets",
    "price": 420.21,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs-therapeutic-classes/drug-class-97?pageNumber=0%3Fpage%3D4%3Fpage%3D3",
    "classes": [
      "triptan"
    ],
    "combination": false
  },
  {
    "id": "perinorm",
    "name": "Perinorm",
    "composition": "Metoclopramide 10 mg",
    "marketer": "Ipca Laboratories Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "10 tablets",
    "price": 14.49,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/perinorm-10-mg-tablet-18365",
    "classes": [
      "antiemetic"
    ],
    "combination": false
  },
  {
    "id": "inderal",
    "name": "Inderal 40",
    "composition": "Propranolol 40 mg",
    "marketer": "Abbott",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "15 tablets",
    "price": 51.88,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/inderal-40-mg-tablet-342626",
    "classes": [
      "beta"
    ],
    "combination": false
  },
  {
    "id": "migrabeta",
    "name": "Migrabeta Plus SR",
    "composition": "Propranolol 40 mg + flunarizine 10 mg",
    "marketer": "Alkem Laboratories Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "15 SR tablets",
    "price": 268.5,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/migrabeta-plus-tablet-sr-1134035",
    "classes": [
      "beta"
    ],
    "combination": true,
    "note": "Prevention only; not acute rescue. Flunarizine adds sedation, weight-gain and depression/parkinsonism considerations."
  },
  {
    "id": "candesar",
    "name": "Candesar 8",
    "composition": "Candesartan 8 mg",
    "marketer": "Sun Pharmaceutical Industries Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "Pack size not verified",
    "price": 45,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/Candesar-Tablet-527098",
    "classes": [
      "arb"
    ],
    "combination": false,
    "note": "Listing not offered for sale at review; pack size not confirmed, so no unit cost calculated."
  },
  {
    "id": "tryptomer",
    "name": "Tryptomer 10",
    "composition": "Amitriptyline 10 mg",
    "marketer": "Dr Reddy's Laboratories Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "30 tablets",
    "price": 76.88,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/Tryptomer-Tablet-332265",
    "classes": [
      "tca"
    ],
    "combination": false
  },
  {
    "id": "nortimer",
    "name": "Nortimer 10",
    "composition": "Nortriptyline 10 mg",
    "marketer": "Intas Pharmaceuticals Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "10 tablets",
    "price": 50.9,
    "priceType": "Listed pack MRP",
    "url": "https://www.netmeds.com/product/nortimer-10-tablet-10s-lui5bl-8302728",
    "classes": [
      "tca"
    ],
    "combination": false
  },
  {
    "id": "topamac",
    "name": "Topamac 25",
    "composition": "Topiramate 25 mg",
    "marketer": "Janssen Pharmaceuticals",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "10 tablets",
    "price": 160.3,
    "priceType": "Listed retail pack price (MRP not separately shown)",
    "url": "https://www.1mg.com/brands/topamac-dG9wYW1hYw%3D%3D",
    "classes": [
      "aed"
    ],
    "combination": false,
    "companySource": "https://www.1mg.com/drugs/topema-25-mg-tablet-225799"
  },
  {
    "id": "encorate",
    "name": "Encorate 200",
    "composition": "Sodium valproate 200 mg",
    "marketer": "Sun Pharmaceutical Industries Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "10 tablets",
    "price": 38.47,
    "priceType": "Listed pack MRP",
    "url": "https://counterfoil.in/medicines/brand/encorate/",
    "classes": [
      "aed"
    ],
    "combination": false,
    "companySource": "https://www.1mg.com/drugs/encorate-200-mg-tablet-5058"
  },
  {
    "id": "lamitor",
    "name": "Lamitor DT 25",
    "composition": "Lamotrigine 25 mg",
    "marketer": "Torrent Pharmaceuticals Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "15 dispersible tablets",
    "price": 174.42,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/brands/lamitor-bGFtaXRvcg%3D%3D",
    "classes": [
      "aed"
    ],
    "combination": false,
    "companySource": "https://www.1mg.com/drugs/lamitor-dt-25-tablet-534880"
  },
  {
    "id": "gabapin",
    "name": "Gabapin 100",
    "composition": "Gabapentin 100 mg",
    "marketer": "Intas Pharmaceuticals Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "15 tablets",
    "price": 169.1,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/gabapin-100-tablet-349297",
    "classes": [
      "aed"
    ],
    "combination": false
  },
  {
    "id": "calaptin",
    "name": "Calaptin 40",
    "composition": "Verapamil 40 mg",
    "marketer": "Abbott",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "30 tablets",
    "price": 27.4,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/Calaptin-Tablet-554273",
    "classes": [
      "ccb"
    ],
    "combination": false
  },
  {
    "id": "wysolone",
    "name": "Wysolone 10 DT",
    "composition": "Prednisolone 10 mg",
    "marketer": "Pfizer Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "15 dispersible tablets",
    "price": 19.02,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/wysolone-10mg-tablet-244028",
    "classes": [
      "steroid"
    ],
    "combination": false,
    "note": "Prednisolone, not prednisone. Specialist must choose the steroid and regimen; these names are not identical."
  },
  {
    "id": "lithosun",
    "name": "Lithosun 300",
    "composition": "Lithium carbonate 300 mg",
    "marketer": "Sun Pharmaceutical Industries Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "10 tablets",
    "price": 26.3,
    "priceType": "Listed retail pack price (MRP not separately shown)",
    "url": "https://www.1mg.com/drugs/lithosun-300-tablet-16861",
    "classes": [
      "lithium"
    ],
    "combination": false
  },
  {
    "id": "diamox",
    "name": "Diamox",
    "composition": "Acetazolamide 250 mg",
    "marketer": "Sun Pharmaceutical Industries Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "15 tablets",
    "price": 65.3,
    "priceType": "Listed pack MRP",
    "url": "https://www.1mg.com/drugs/diamox-250mg-tablet-58859",
    "classes": [
      "cai"
    ],
    "combination": false
  },
  {
    "id": "nurtec",
    "name": "Nurtec ODT",
    "composition": "Rimegepant 75 mg",
    "marketer": "Pfizer Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "2 orally disintegrating tablets",
    "price": 3000,
    "priceType": "Listed retail pack price",
    "url": "https://www.apollopharmacy.in/medicine/nurtec-odt-75-mg-tablet-2-s",
    "classes": [
      "gepant"
    ],
    "combination": false,
    "note": "Confirm Indian indication, current availability and interactions; not a claim that other gepants are locally stocked."
  },
  {
    "id": "suviray",
    "name": "Suviray",
    "composition": "Erenumab 70 mg/mL",
    "marketer": "Novartis India Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "1 prefilled syringe (1 mL)",
    "price": 25653.75,
    "priceType": "Listed pack MRP",
    "url": "https://www.medkart.in/order-medicine/suviray-70mg-ml-injection",
    "classes": [
      "mab"
    ],
    "combination": false
  },
  {
    "id": "botox",
    "name": "Botox 100 IU",
    "composition": "OnabotulinumtoxinA 100 units",
    "marketer": "Allergan India Pvt Ltd",
    "manufacturer": "Allergan Healthcare India Pvt Ltd (supplier-listed; verify current pack)",
    "pack": "1 vial",
    "price": 24197,
    "priceType": "Listed pack MRP",
    "url": "https://www.apothecare.in/products/botox-100-iu-injection",
    "classes": [
      "botulinum"
    ],
    "combination": false,
    "note": "Vial price only; excludes procedure and consultation. Other toxin preparations/units are not interchangeable."
  },
  {
    "id": "xylocard",
    "name": "Xylocard 2%",
    "composition": "Lidocaine (lignocaine) 2%",
    "marketer": "AstraZeneca Pharma India Ltd",
    "manufacturer": "Not independently verified; check current pack",
    "pack": "50 mL vial",
    "price": 43.3,
    "priceType": "Listed pack MRP",
    "url": "https://pharmeasy.in/online-medicine-order/xylocard-2-inj-50ml-64742",
    "classes": [
      "local"
    ],
    "combination": false,
    "note": "Source lists out of stock. Specialist monitored IV rescue only; verify current manufacturer and suitable IV formulation."
  }
];
