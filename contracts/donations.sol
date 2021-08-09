pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign ( minimum, msg.sender); // returns address of new campaign
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns ( address[] memory) {
        return deployedCampaigns;
    }
}
contract Campaign {

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    mapping(address => bool) public received;
    uint public approversCount;
    string public description;

    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }


    function contribute () public payable {
        require(msg.value > minimumContribution);

        if (approversCount < 500){
            createNFT();
        }

        approvers[msg.sender] = true;
        approversCount ++;
    }

    function createNFT () private {
        require(!received[msg.sender]);
        //createNFT
        received[msg.sender] = true;
    }


    function finalizeRequest( string memory input) public {
        require(msg.sender == manager);
        description = input;
        manager.transfer(address(this).balance);
    }

}
