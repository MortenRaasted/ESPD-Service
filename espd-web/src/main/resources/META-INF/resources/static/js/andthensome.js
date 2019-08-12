// sakset fra chrome pretty print ({} i bunden af soucce viewer) af all.js

/* efter ændret url virkede det fint, så EcertisHandler er tilbage i den minimerede all.js
function EcertisHandler(url, country) {
    return function() {
        var uuid = $(this).attr("data-uuid");
        alert(uuid);
		if (uuid != "") {
            var content = $(this).attr("data-target");
            $(content).find("#content, #issued, #ecertis404").hide();
            $(content).children("#loading").show();
            $.getJSON(url.replace("[uuid]", uuid).replace("[country]", country.toLowerCase()).replace("[lang]", pageLanguage), function(data) {
                $(content).children("#loading").hide();
                if (data && data.DomainID == "eproc" && data.hasOwnProperty("SubCriterion")) {
                    content = $(content).children("#content").show();
                    var T = $(content).find("#template").hide();
                    $(T).siblings("#subcriterion").remove();
                    if (data.hasOwnProperty("SubCriterion")) {
                        $.each(data.SubCriterion, function(key, val) {
                            var item = T.clone().attr("id", "subcriterion").appendTo(T.parent()).show();
                            var list = item.children("#evidencesFound").html("");
                            item.find("#evidencesFound, #evidencesNotFound").hide();
                            item.children("#subname").html(val.Name.value);
                            item.find("#title").html(val.LegislationReference[0].Title.value);
                            item.find("#url").text(val.LegislationReference[0].Article.value).attr("href", val.LegislationReference[0].URI);
                            item.find("#description").html(val.Description.value);
                            var hasEvidences = false;
                            $.each($(val.RequirementGroup), function(key, val) {
                                $.each($(val.TypeOfEvidence), function(key, val) {
                                    var names = [];
                                    $.each($(val["EvidenceIssuerParty"]), function(key, val) {
                                        $.each($(val["PartyName"]), function(i, val) {
                                            names.push(val.Name.value)
                                        });
                                    })
                                    var evidenceURL = val.EvidenceDocumentReference[0].Attachment.ExternalReference.URI;
                                    var evidence = T.find("#evidence").clone().appendTo(list);
                                    evidence.find("#name").text(val.Name.value).attr("href", evidenceURL);
                                    evidence.find("#issued").toggle(names.length != 0).children("#issuerNames").text(names.join(","));
                                    hasEvidences = true;
                                });
                            });
                            item.children(hasEvidences ? "#evidencesFound" : "#evidencesNotFound").show();
                        });
                    }
                } else {
                    $(content).find("#ecertis404").show();
                }
            }).fail(function() {
                $(content).children("#loading").hide();
                $(content).find("#ecertis404").show();
            });
        }
    }
}
*/ 